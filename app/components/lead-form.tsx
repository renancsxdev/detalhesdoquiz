"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { collection, addDoc } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvGHoMEey_Nlf5yFHk0-HwSFEjtWRel6M",
  authDomain: "kit-cristao.firebaseapp.com",
  projectId: "kit-cristao",
  storageBucket: "kit-cristao.firebasestorage.app",
  messagingSenderId: "233883722686",
  appId: "1:233883722686:web:9301d80e1b90247680cfef",
  measurementId: "G-09LR0SBDCX",
}

// Initialize Firebase
let app
let db

if (typeof window !== "undefined") {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
  } catch (error) {
    console.error("Error initializing Firebase:", error)
  }
}

export default function LeadForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubmitStatus("error")
      setErrorMessage("Por favor, insira um email válido.")
      return
    }

    // Validate name
    if (!name.trim()) {
      setSubmitStatus("error")
      setErrorMessage("Por favor, insira seu nome.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (db) {
        // Save directly to Firestore
        await addDoc(collection(db, "quiz-participants"), {
          name,
          email,
          source: "lead-form",
          createdAt: new Date(),
        })

        // Success
        setSubmitStatus("success")
        setName("")
        setEmail("")

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        throw new Error("Firebase not initialized")
      }
    } catch (error) {
      console.error("Erro ao salvar dados:", error)
      setSubmitStatus("error")
      setErrorMessage("Ocorreu um erro ao registrar seus dados. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
          <p className="font-medium">Obrigado por se inscrever!</p>
          <p className="text-sm">Enviaremos novidades e promoções para o seu email.</p>
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
              Seu nome
            </label>
            <Input
              id="lead-name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
              Seu email
            </label>
            <Input
              id="lead-email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">{errorMessage}</div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Enviando...
              </span>
            ) : (
              "Receber Novidades"
            )}
          </Button>
        </>
      )}
    </form>
  )
}

