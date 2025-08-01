"use client"

import { useState, useEffect } from "react"
import { Cake, Heart, Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BirthdayGreeting() {
  const [showPhotos, setShowPhotos] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [photoCounter, setPhotoCounter] = useState(0)
  const [showSurprise, setShowSurprise] = useState(false)
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; color: string }>
  >([])

  const photos = [
    "https://res.cloudinary.com/dudseghqo/image/upload/v1754033829/z6862889763652_ad2b7dd627bdb76e3eaa0577446687a1_u9i6jf.jpg",
    "https://res.cloudinary.com/dudseghqo/image/upload/v1754033851/z6862889765008_5ac25775e103a59193252aa97fa30975_mdulmf.jpg",
    "https://res.cloudinary.com/dudseghqo/image/upload/v1754034658/z6862889755989_8ddcf9a44a789702df7f87b90bb48120_hvm2xy.jpg",
    "https://res.cloudinary.com/dudseghqo/image/upload/v1754034662/z6862889749956_4d7b1d7791596c8627dd5e1e1462ab4d_bfkylu.jpg",
    "https://res.cloudinary.com/dudseghqo/image/upload/v1754035049/z6862972813711_ec98b982892eab059e858c4972dacf50_qf4duv.jpg",
  ]

  // Generate initial confetti
  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: ["bg-pink-400", "bg-blue-400", "bg-yellow-400", "bg-purple-400", "bg-green-400"][
        Math.floor(Math.random() * 5)
      ],
    }))
    setConfettiPieces(pieces)
  }, [])

  const handleSurprise = () => {
    setShowSurprise(true)
    setShowPhotos(true)
    setPhotoCounter((prev) => prev + 1)

    // Start photo slideshow
    let photoIndex = 0
    const slideInterval = setInterval(() => {
      photoIndex = (photoIndex + 1) % photos.length
      setCurrentPhotoIndex(photoIndex)
    }, 2000)

    // Generate more confetti for the surprise
    const newPieces = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1000,
      left: Math.random() * 100,
      delay: 0,
      duration: 2 + Math.random() * 3,
      color: ["bg-pink-400", "bg-blue-400", "bg-yellow-400", "bg-purple-400", "bg-green-400", "bg-red-400"][
        Math.floor(Math.random() * 6)
      ],
    }))
    setConfettiPieces((prev) => [...prev, ...newPieces])

    // Reset surprise state after animation
    setTimeout(() => {
      clearInterval(slideInterval)
      setShowSurprise(false)
      setShowPhotos(false)
      setCurrentPhotoIndex(0)
      setConfettiPieces((prev) => prev.slice(0, 50))
    }, 12000) // Extended to 12 seconds for photo slideshow
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 via-blue-100 to-yellow-200 relative overflow-hidden flex items-center justify-center p-4">
      {/* Enhanced Magical Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes with glow effects */}
        <div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-300/40 rounded-full animate-pulse shadow-lg shadow-pink-300/50"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-300/40 rotate-45 animate-spin shadow-lg shadow-blue-300/50"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-yellow-300/40 rounded-full animate-bounce shadow-lg shadow-yellow-300/50"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-300/40 rounded-full animate-pulse shadow-lg shadow-purple-300/50"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="absolute top-1/2 left-1/6 w-14 h-14 bg-green-300/40 rotate-12 animate-spin shadow-lg shadow-green-300/50"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-3/4 right-1/6 w-18 h-18 bg-red-300/40 rounded-full animate-bounce shadow-lg shadow-red-300/50"
          style={{ animationDuration: "4.5s" }}
        />

        {/* Magical sparkle effects */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full animate-ping shadow-lg shadow-white/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Floating stars */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-yellow-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            ⭐
          </div>
        ))}

        {/* Floating gift boxes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`gift-${i}`}
            className="absolute text-pink-400 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`,
            }}
          >
            🎁
          </div>
        ))}

        {/* Floating birthday cakes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`cake-${i}`}
            className="absolute text-orange-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            🎂
          </div>
        ))}

        {/* Magical circles with gradient */}
        <div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full animate-spin"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute bottom-10 left-10 w-28 h-28 bg-gradient-to-r from-blue-200/30 to-green-200/30 rounded-full animate-spin"
          style={{ animationDuration: "10s", animationDirection: "reverse" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-200/30 to-red-200/30 rounded-full animate-pulse"
          style={{ animationDuration: "6s" }}
        />
      </div>

      {/* Enhanced Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className={`absolute w-3 h-3 ${piece.color} rounded-full opacity-80`}
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              top: "-20px",
              animation: `fall ${piece.duration}s ${piece.delay}s infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-8 h-12 bg-gradient-to-b from-red-300 to-red-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-20 right-16 w-6 h-10 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-32 left-1/4 w-7 h-11 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        />
        <div
          className="absolute top-16 right-1/3 w-5 h-9 bg-gradient-to-b from-purple-300 to-purple-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
        />
        <div
          className="absolute bottom-20 left-20 w-6 h-10 bg-gradient-to-b from-green-300 to-green-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "1.5s", animationDuration: "3.8s" }}
        />
        <div
          className="absolute bottom-32 right-20 w-8 h-12 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "2.5s", animationDuration: "4.2s" }}
        />
      </div>

      {/* Main Birthday Card */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center transform hover:scale-105 transition-all duration-300 border border-white/20">
          {/* Decorative Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <Gift className="w-6 h-6 text-purple-500 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-fade-in">
            Happy Birthday,
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 animate-bounce">Mỹ Trúc! 🎉</h2>

          {/* Birthday Cake */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Cake className="w-24 h-24 md:w-32 md:h-32 text-pink-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🕯️</div>
              <div
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xl animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                🕯️
              </div>
              <div className="absolute -top-2 -left-2 text-2xl animate-bounce" style={{ animationDelay: "1s" }}>
                🕯️
              </div>
            </div>
          </div>

          {/* Birthday Message */}
          <p
            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            Hợp tác xã EVS chúc cho "Bảo Mẫu" Mỹ Trúc của tụi em sinh nhật vui vẻ !!! Chúc cho những điều tốt đẹp nhất
            sẽ đến với chị ở tuổi mới thật rực rỡ !!! 🌟
          </p>

          {/* Surprise Button */}
          <Button
            onClick={handleSurprise}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
            disabled={showSurprise}
          >
            {showSurprise ? "🎊 Bất ngờ! 🎊" : "🎁 Bất ngờ nhỏ ! 🎁"}
          </Button>

          {/* Surprise Message */}
          {showSurprise && (
            <div className="mt-6 animate-fade-in">
              <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text animate-bounce">
                🎉 Hope your birthday is absolutely magical! 🎉
              </p>
            </div>
          )}
        </div>

        {/* Floating Hearts */}
        <div className="absolute -top-4 -left-4 text-pink-400 text-2xl animate-bounce">💖</div>
        <div className="absolute -top-2 -right-6 text-red-400 text-xl animate-bounce" style={{ animationDelay: "1s" }}>
          ❤️
        </div>
        <div
          className="absolute -bottom-4 -left-2 text-purple-400 text-xl animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          💜
        </div>
        <div
          className="absolute -bottom-2 -right-4 text-blue-400 text-2xl animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          💙
        </div>
      </div>

      {/* Photo Slideshow Modal */}
      {showPhotos && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 z-50 flex flex-col">
          {/* Floating hearts and sparkles background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`modal-heart-${i}`}
                className="absolute text-white/30 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${12 + Math.random() * 8}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                ♡
              </div>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`modal-sparkle-${i}`}
                className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <div className="relative z-10 flex justify-between items-center p-4 text-white">
            <button
              onClick={() => {
                setShowPhotos(false)
                setShowSurprise(false)
              }}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-all duration-200"
            >
              <span className="text-sm">✕</span>
              <span className="text-sm font-medium">Close</span>
            </button>

            <h2 className="text-lg font-semibold">My Truc's Birthday Memories ✨</h2>

            <button
              onClick={() => setShowSurprise(!showSurprise)}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-all duration-200"
            >
              <span className="text-sm">⏸</span>
              <span className="text-sm font-medium">Pause</span>
            </button>
          </div>

          {/* Main content area */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
            {/* Top message */}
            <div className="mb-4 text-center">
              <p className="text-white text-lg font-medium">🎂 The best birthday celebration ever! 🎁</p>
            </div>

            {/* Photo container - Made much larger */}
            <div className="relative w-full max-w-5xl">
              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 shadow-lg"
              >
                ‹
              </button>

              <button
                onClick={() => setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200 shadow-lg"
              >
                ›
              </button>

              {/* Photo display - Much larger */}
              <div className="bg-black/20 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={photos[currentPhotoIndex] || "/placeholder.svg"}
                    alt={`Memory ${currentPhotoIndex + 1}`}
                    className="w-full h-[70vh] object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="relative z-10 p-4">
            <div className="flex justify-center items-center space-x-4">
              {/* Photo thumbnails/indicators */}
              <div className="flex space-x-3">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-16 h-10 rounded-lg transition-all duration-200 shadow-lg ${
                      index === currentPhotoIndex
                        ? "bg-white/50 border-2 border-white scale-110"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    <img
                      src={photos[index] || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
