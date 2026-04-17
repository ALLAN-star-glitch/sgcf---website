export type NewsArticle = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  image?: string
  category: 'Intake' | 'Event' | 'Success Story' | 'Announcement'
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: 'may-2026-intake-now-open',
    title: 'Applications Open for May 2026 Intake – Join Us Today!',
    excerpt:
      'Africana College of Professionals invites applications for Certificate and Diploma courses in Counselling Psychology, Electrical Wiring, Computer Packages, and more.',
    content: `
      <p>The May 2026 intake is officially open at Africana College of Professionals. As a TVET-accredited institution in Kenya, we offer flexible learning modes including virtual and physical classes.</p>
      <h3>Courses Available:</h3>
      <ul>
        <li>Diploma in Counselling Psychology</li>
        <li>Diploma in Marriage and Family</li>
        <li>Certificate in Electrical Wiring</li>
        <li>Computer Packages</li>
        <li>Hair and Beauty</li>
      </ul>
      <p>Apply now at our Thika campus or online at www.acop.co.ke</p>
    `,
    date: 'April 15, 2026',
    image: '/images/may-intake-2026.jpg',
    category: 'Intake',
  },
  {
    id: 2,
    slug: 'community-outreach-counselling-workshop',
    title: 'Africana College Hosts Free Counselling Workshop in Thika',
    excerpt:
      'In partnership with Susan Gitau Counselling Foundation, the college reaches out to the community with mental health awareness and professional guidance.',
    content: `<p>The event brought together over 200 community members...</p>`,
    date: 'April 5, 2026',
    image: '/images/outreach.jpg',
    category: 'Event',
  },
  {
    id: 3,
    slug: 'student-success-story-grace-mueni',
    title: 'From Graduate to Professional Counsellor – Grace\'s Journey',
    excerpt:
      'Meet Grace Mueni, a Diploma in Counselling Psychology graduate now running her own private practice in Nairobi.',
    content: `<p>Grace shares her inspiring story of transformation...</p>`,
    date: 'March 28, 2026',
    image: '/images/success-story.jpg',
    category: 'Success Story',
  },
  {
    id: 4,
    slug: 'new-partnership-tangaza-university',
    title: 'Africana College Partners with Tangaza University for Degree Pathways',
    excerpt:
      'Students can now seamlessly transition from diploma to degree programmes at Tangaza University.',
    content: `<p>This partnership opens doors for further education...</p>`,
    date: 'March 20, 2026',
    image: '/images/partnership.jpg',
    category: 'Announcement',
  },
{
  id: 5,
  slug: 'may-2026-intake-complete-guide',
  title: 'May 2026 Intake Now Open – Start Your Professional Journey Today',
  excerpt: 'Africana College of Professionals, a TVET-accredited institution in Kenya, invites applications for Certificate and Diploma courses. Flexible learning modes available with affordable fees.',
  content: `
    <div class="space-y-8">
      <!-- Introduction Alert Box -->
      <div class="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-xl border-l-4 border-orange-500">
        <p class="text-lg font-semibold text-gray-800 mb-2">Important Announcement</p>
        <p class="text-gray-700"><strong>Applications for May 2026 Intake are now open at Africana College of Professionals.</strong> As a leading TVET-accredited institution in Kenya, we offer flexible learning modes including virtual and physical classes to suit your schedule.</p>
      </div>

      <!-- Why Choose Us Section with Grid -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Why Choose Africana College of Professionals?</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mt-2">Experienced Lecturers</h3>
            <p class="text-gray-600 text-sm">Supportive and qualified lecturers from Kenya</p>
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mt-2">Affordable Fees</h3>
            <p class="text-gray-600 text-sm">Flexible payment plans available</p>
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mt-2">Flexible Study Modes</h3>
            <p class="text-gray-600 text-sm">Virtual or Physical - you choose</p>
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mt-2">No Age Limit</h3>
            <p class="text-gray-600 text-sm">Everyone is welcome to learn</p>
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mt-2">Internship Opportunities</h3>
            <p class="text-gray-600 text-sm">Guided attachment programs</p>
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mt-2">Industrial Exposure</h3>
            <p class="text-gray-600 text-sm">Real-world experience and networking</p>
          </div>
        </div>
      </div>

      <!-- Courses Section -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Courses Available for May 2026 Intake</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div class="bg-orange-50 rounded-lg p-3">
            <span class="text-gray-700">Diploma in Counselling Psychology</span>
          </div>
          <div class="bg-orange-50 rounded-lg p-3">
            <span class="text-gray-700">Diploma in Marriage and Family</span>
          </div>
          <div class="bg-orange-50 rounded-lg p-3">
            <span class="text-gray-700">Training of Trainers (TOT)</span>
          </div>
          <div class="bg-purple-50 rounded-lg p-3">
            <span class="text-gray-700">Certificate in Electrical Wiring</span>
          </div>
          <div class="bg-purple-50 rounded-lg p-3">
            <span class="text-gray-700">Certificate in Plumbing</span>
          </div>
          <div class="bg-purple-50 rounded-lg p-3">
            <span class="text-gray-700">Computer Packages</span>
          </div>
          <div class="bg-orange-50 rounded-lg p-3">
            <span class="text-gray-700">Computer Fundamentals & Programming</span>
          </div>
          <div class="bg-orange-50 rounded-lg p-3">
            <span class="text-gray-700">Hair and Beauty</span>
          </div>
          <div class="bg-purple-50 rounded-lg p-3">
            <span class="text-gray-700">Mindful Self-Compassion</span>
          </div>
        </div>
      </div>

      <!-- Partnerships Section -->
      <div class="bg-gray-50 rounded-xl p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Partnerships & Collaborations</h2>
        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Tangaza University</span>
          <span class="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">International Professional Counselors Centre (IPCC)</span>
          <span class="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Susan Gitau Counselling Foundation (SGCF)</span>
          <span class="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Community Based Institutions</span>
        </div>
      </div>

      <!-- Requirements Section -->
      <div class="border-2 border-orange-200 rounded-xl p-6 bg-gradient-to-br from-white to-orange-50">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Admission Requirements</h2>
        <ul class="space-y-2">
          <li class="flex items-center gap-3">
            <span class="text-orange-500">✓</span>
            <span class="text-gray-700">KCSE certificate</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-orange-500">✓</span>
            <span class="text-gray-700">Copy of your National ID card</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-orange-500">✓</span>
            <span class="text-gray-700">Copy of your passport photo</span>
          </li>
        </ul>
      </div>

      <!-- How to Apply Section -->
      <div class="bg-purple-600 text-white rounded-xl p-6">
        <h2 class="text-2xl font-bold mb-4">How to Apply</h2>
        <p class="mb-4">Visit our campus or apply online through our website.</p>
        <div class="space-y-2 text-sm">
          <p><strong class="text-orange-300">Campus Location:</strong> Kyanjau House, 4th Floor, next to Unaitas Bank, along Kwame Nkrumah Road, Thika town, Kenya</p>
          <p><strong class="text-orange-300">Call:</strong> +254756234165</p>
          <p><strong class="text-orange-300">Email:</strong> info@acop.co.ke</p>
          <p><strong class="text-orange-300">Website:</strong> www.acop.co.ke</p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center py-4">
        <div class="inline-block bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg">
          <p class="text-xl font-bold">Don't miss out!</p>
          <p class="text-lg">Apply today and start a chapter of your own story.</p>
        </div>
      </div>
    </div>
  `,
  date: 'April 17, 2026',
  image: 'https://www.acop.co.ke/may-intake.jpg',
  category: 'Intake',
}
]

export function getAllNews(): NewsArticle[] {
  return newsArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  console.log('Looking for slug:', slug)
  const result = newsArticles.find((article) => article.slug === slug)
  console.log('Found:', result)
  return result
}