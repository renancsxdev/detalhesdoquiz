"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, ShoppingCart, CheckCircle, Sparkles, Download, BookOpen, Gift } from "lucide-react"

export default function BibleQuizLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeParticipants, setActiveParticipants] = useState(2)

  useEffect(() => {
    setIsVisible(true)

    // Randomly change the number of active participants every 30 seconds
    const interval = setInterval(() => {
      setActiveParticipants(Math.floor(Math.random() * 5) + 1)
    }, 30000)

    // Adiciona animação de scroll suave para os links internos
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)

    return () => {
      clearInterval(interval)
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-purple-50 to-white py-20 px-4">
        {/* Partículas flutuantes animadas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => {
            const emojis = ["✝️", "📚", "✨", "💫", "🙏", "👼", "❤️"]
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
            const style = {
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }

            return (
              <div key={i} className="absolute animate-float text-6xl opacity-10" style={style} aria-hidden="true">
                {randomEmoji}
              </div>
            )
          })}
        </div>

        {/* Formas decorativas */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div
            className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-200 opacity-20 animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-200 opacity-20 animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-40 right-40 w-20 h-20 rounded-full bg-green-200 opacity-20 animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-purple-200 opacity-20 animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>
        </div>

        <div
          className={`container mx-auto max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-10">
            <div className="inline-block relative mb-6">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 animate-spin-slow blur-xl opacity-30"></span>
              <span className="relative inline-block bg-white text-yellow-500 text-sm font-bold px-4 py-2 rounded-full shadow-md">
                <Sparkles className="inline-block w-4 h-4 mr-1" /> QUIZ DA BÍBLIA
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight drop-shadow-sm mb-4">
              Quiz da Bíblia: Inspire a Fé dos Seus Filhos!
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-500 max-w-3xl mx-auto">
              12 perguntas sobre histórias bíblicas para toda a família
            </h2>
          </div>

          {/* Informações sobre o quiz - Centralizado */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl border-2 border-yellow-300 shadow-md transform transition-transform hover:scale-105 duration-300">
              <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md mx-auto max-w-xs mb-4 transform -rotate-2">
                <div className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>APRENDA BRINCANDO!</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-3">Sobre o Quiz da Bíblia</h3>
              <p className="text-gray-700 mb-4">
                Um quiz interativo com 12 perguntas sobre as histórias mais marcantes da Bíblia, desenvolvido
                especialmente para mães cristãs compartilharem momentos de fé com seus filhos.
              </p>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Download className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">Disponível para toda a família</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Histórias bíblicas em formato divertido</span>
              </div>

              <a
                href="https://quizdabiblia.vercel.app"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 text-center"
              >
                Acessar o Quiz
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm mt-6">
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span>12 Perguntas Bíblicas</span>
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span>Para Toda a Família</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live participants notification */}
      <div className="bg-amber-100 p-2 text-center text-sm font-medium text-blue-800 sticky top-0 z-30">
        <span className="inline-flex items-center">
          <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
          {activeParticipants} pessoas estão realizando o quiz neste exato momento
        </span>
      </div>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto max-w-4xl relative">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          </div>

          {/* Título da seção */}
          <div className="text-center mb-12 relative z-10">
            <div className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full mb-4 shadow-sm">
              BENEFÍCIOS DO QUIZ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
              Por que participar do Quiz da Bíblia? 🎁
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja como o Quiz da Bíblia pode ajudar no desenvolvimento espiritual da sua família
            </p>
          </div>

          {/* O que você ganha - Atualizado com a oferta e guia gratuito */}
          <div className="mb-8 w-full max-w-2xl mx-auto rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8 shadow-md relative z-10 border border-blue-100">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg animate-pulse">
              EXCLUSIVO
            </div>

            <h3 className="mb-4 text-center text-2xl font-bold text-blue-800">O que você ganha ao participar?</h3>

            <div className="bg-white p-4 rounded-lg mb-6 border border-blue-100 shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <Gift className="h-8 w-8 text-amber-500 mr-2" />
                <h4 className="text-xl font-bold text-amber-600">Ao finalizar o quiz você receberá:</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium">
                    Um <span className="text-green-600 font-bold">Guia Exclusivo para Pais</span> totalmente GRATUITO
                    com dicas para ensinar a Bíblia aos seus filhos
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium">
                    Uma <span className="text-amber-600 font-bold">Oferta Imperdível</span> especialmente preparada para
                    as famílias cristãs
                  </span>
                </li>
              </ul>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="mr-3 h-6 w-6 text-amber-500" />
                <span>Descubra o quanto você sabe sobre a Bíblia!</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-3 h-6 w-6 text-amber-500" />
                <span>Aprenda formas divertidas de ensinar histórias bíblicas para seus filhos</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-3 h-6 w-6 text-amber-500" />
                <span>Crie momentos especiais de conexão familiar através da fé</span>
              </li>
            </ul>

            <div className="mt-6 text-center">
              <a
                href="https://quizdabiblia.vercel.app"
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
              >
                Quero Participar Agora!
              </a>
            </div>
          </div>

          {/* Depoimento */}
          <div className="mb-8 w-full max-w-2xl mx-auto rounded-lg bg-blue-100 p-6 shadow-md text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-blue-200 border-4 border-white shadow-md">
                <Image
                  src="/mae.jpg?height=100&width=100"
                  alt="Ana, mãe de dois filhos"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="italic text-blue-900 text-lg">
                  "Fiz o quiz com meu filho e ele amou! Foi uma forma divertida de ensinar histórias bíblicas e criar
                  momentos especiais de fé em casa."
                </p>
                <p className="mt-2 font-medium">– Ana, mãe de dois filhos.</p>
              </div>
            </div>
          </div>

          {/* Cards de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Aprendizado Divertido",
                icon: BookOpen,
                iconBg: "from-blue-400 to-indigo-500",
                description:
                  "Transforme o estudo bíblico em uma experiência divertida e memorável para toda a família.",
                badge: "EDUCATIVO",
                badgeBg: "bg-green-500",
                badgeText: "text-green-900",
              },
              {
                title: "Fortalecimento da Fé",
                icon: Star,
                iconBg: "from-yellow-400 to-orange-500",
                description: "Fortaleça os valores cristãos e o conhecimento bíblico de forma leve e acessível.",
                badge: "ESPIRITUAL",
                badgeBg: "bg-yellow-500",
                badgeText: "text-yellow-900",
              },
              {
                title: "Conexão Familiar",
                icon: ShoppingCart,
                iconBg: "from-purple-400 to-pink-500",
                description: "Crie momentos especiais de conexão com seus filhos através das histórias da Bíblia.",
                badge: "RELACIONAL",
                badgeBg: "bg-purple-500",
                badgeText: "text-purple-900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transform transition-all duration-500 hover:scale-102 hover:bg-white/15 group overflow-hidden text-center"
              >
                {/* Conteúdo */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    {/* Ícone */}
                    <div className={`bg-gradient-to-br ${item.iconBg} p-3 rounded-xl shadow-lg mx-auto`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Badge no canto */}
                    <div
                      className={`${item.badgeBg} ${item.badgeText} text-xs font-bold px-2 py-1 rounded-full absolute top-4 right-4`}
                    >
                      {item.badge}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                  {/* Botão de ação */}
                  <div className="mt-auto pt-2">
                    <a
                      href="https://quizdabiblia.vercel.app"
                      className="block w-full text-center hover:bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg border border-blue-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Acessar o Quiz</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="text-center">
            <a
              href="https://quizdabiblia.vercel.app"
              className="inline-block mb-8 h-12 bg-amber-500 px-8 text-lg font-semibold text-white shadow-md hover:bg-amber-600 rounded-md flex items-center justify-center"
            >
              Acessar o Quiz da Bíblia
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-600 font-semibold px-4 py-2 rounded-full mb-4">
              COMO FUNCIONA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-4">
              Três Passos Simples 🚶‍♀️
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Veja como é fácil participar do Quiz da Bíblia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "1",
                title: "Acesse o Quiz",
                description: "Visite o site do Quiz da Bíblia através do link disponível nesta página.",
                icon: "🔗",
                color: "from-blue-400 to-blue-500",
              },
              {
                number: "2",
                title: "Responda as Perguntas",
                description: "São 12 perguntas sobre histórias marcantes da Bíblia.",
                icon: "❓",
                color: "from-purple-400 to-purple-500",
              },
              {
                number: "3",
                title: "Receba Recompensas",
                description: "Ao finalizar, receba um guia exclusivo e uma oferta especial!",
                icon: "🎁",
                color: "from-green-400 to-green-500",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Linha conectora */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-1 bg-gradient-to-r from-blue-200 to-transparent -z-10"></div>
                )}

                <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  {/* Número do passo */}
                  <div
                    className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                  >
                    {step.number}
                  </div>

                  <div className="text-center pt-8">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-100">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-1 rounded-3xl shadow-2xl mb-10">
            <div className="bg-white p-8 rounded-3xl relative overflow-hidden">
              {/* Elementos decorativos animados */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 animate-pulse"
                  style={{ animationDuration: "8s" }}
                ></div>
                <div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"
                  style={{ animationDuration: "10s" }}
                ></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                  Inspire a Fé dos Seus Filhos! 🙏
                </h2>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Mamãe cristã, quer ensinar a Bíblia aos seus filhos de forma divertida e inesquecível? Teste seus
                  conhecimentos com nosso Quiz da Bíblia! São 12 perguntas sobre as histórias mais marcantes da Palavra.
                </p>

                <div className="relative mx-auto max-w-md group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
                  <a
                    href="https://quizdabiblia.vercel.app"
                    className="relative block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-8 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 group-hover:shadow-2xl"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>ACESSAR O QUIZ AGORA!</span>
                      <span className="text-2xl">🚀</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2025 Kit da Criança Cristã para Colorir. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-sm hover:underline">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

