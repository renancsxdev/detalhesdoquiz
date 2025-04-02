import { NextResponse } from "next/server"
import { initializeApp, getApps, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

// Initialize Firebase Admin on the server side
const apps = getApps()

if (!apps.length) {
  try {
    initializeApp({
      credential: cert({
        projectId: "kit-cristao",
        // Use fallback values if environment variables are not available
        clientEmail: "firebase-adminsdk-fbsvc@kit-cristao.iam.gserviceaccount.com",
        privateKey: "e4e237d90d1023a31f790ef553c25c242ae19694".replace(/\\n/g, "\n"),
      }),
    })
  } catch (error) {
    console.error("Error initializing Firebase Admin:", error)
  }
}

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 })
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    try {
      // Save to Firestore
      const db = getFirestore()
      const docRef = await db.collection("quiz-participants").add({
        name,
        email,
        createdAt: new Date(),
      })

      return NextResponse.json({
        success: true,
        message: "Dados salvos com sucesso!",
        id: docRef.id,
      })
    } catch (firestoreError) {
      console.error("Firestore error:", firestoreError)
      return NextResponse.json({ error: "Erro ao salvar no banco de dados" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in API route:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}

