import type { Post } from "@/types/post"

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Neden Kendi Blog Sitemi Açtım?",
    date: "May 06, 2025",
    readTime: 2,
    excerpt: "",
    content: [
      "Bugün nihayet uzun süredir ertelediğim bir kararı uygulamaya koydum: kendi blog sitemi yayına aldım.",

      "Full stack developer olarak yıllardır frontend'den backend'e, DevOps'tan veri tabanlarına kadar pek çok konuyla uğraşıyorum. Ama bunları yazıya dökmediğim sürece hem öğrendiklerim içimde kalıyor hem de başkalarının aynı hataları tekrar etmesine engel olamıyorum. Ayrıca yazmak, öğrendiğimi pekiştirmenin en iyi yolu.",

      "Bu blogda neler olacak?",

      "• Gerçek projelerde karşılaştığım problemler ve çözümleri",

      "• Kod parçaları ve mini rehberler",

      "• Yeni öğrendiğim teknolojiler ve ilk izlenimlerim",

      "• Kendi yazılım alışkanlıklarım, verimlilik tüyoları",

      "• Arada sırada yazılım dışı ama geliştiriciliğe dokunan konular: kitaplar, üretkenlik, freelancing deneyimleri",

      "Kısacası burası kodla yazılmış bir günlük olacak. Bugün ilk yazımı \"neden blog yazıyorum\" diye seçtim çünkü her geliştiricinin bir noktada kendine sorması gereken bir soru bu: \"Öğrendiklerimi sadece kendime mi saklayacağım, yoksa paylaşarak büyüyecek miyim?\""
    ],
    coverImage: "/placeholder.svg?height=400&width=800",
  }

]
