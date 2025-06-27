import Head from 'next/head';
import { Luckiest_Guy } from 'next/font/google';

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
});

export default function page() {
    return (
        <div className="min-h-screen bg-transparent md:mt-10 mt-14 ">
            <Head>
                <title>Parent Information - Apna Chhota School</title>
                <meta
                    name="description"
                    content="Everything parents need to know about Apna Chhota School, including school hours, daily routines, meals, enrollment, and more for your child’s early learning journey."
                />
                <meta
                    name="keywords"
                    content="Apna Chhota School, parent information, play school, early learning, school hours, enrollment, child safety"
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Parent Information - Apna Chhota School" />
                <meta
                    property="og:description"
                    content="Discover how Apna Chhota School supports your child’s early learning with details on routines, meals, enrollment, and parent communication."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.apnachhotaschool.com/parent-information" />
                <meta property="og:image" content="https://www.apnachhotaschool.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Parent Information - Apna Chhota School" />
                <meta
                    name="twitter:description"
                    content="Discover how Apna Chhota School supports your child’s early learning with details on routines, meals, enrollment, and parent communication."
                />
                <meta name="twitter:image" content="https://www.apnachhotaschool.com/og-image.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: 'Parent Information',
                            url: 'https://www.apnachhotaschool.com/parent-information',
                            description:
                                'Parent Information for Apna Chhota School, covering school hours, daily routines, enrollment, and more.',
                            publisher: {
                                '@type': 'Organization',
                                name: 'Apna Chhota School',
                                contactPoint: {
                                    '@type': 'ContactPoint',
                                    telephone: '(123) 456-7890',
                                    contactType: 'Customer Service',
                                    email: 'info@apnachhotaschool.com',
                                },
                            },
                        }),
                    }}
                />
            </Head>

            {/* Header Section */}
            <header className="bg-amber-600 text-white py-10 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 sm:gap-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center" role="heading" aria-level="1">
                        Parent Information
                    </h1>
                    <p className={`${lucky.className} text-2xl sm:text-3xl md:text-4xl text-center`}>
                        Apna Chhota School
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
                <div className="max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                        Welcome to the Apna Chhota School Parent Information page! This section provides everything you need to know to support your child’s early learning journey with us.
                    </p>

                    {/* Section 1: General Information */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            General Information
                        </h2>
                        <ul className="list-none text-gray-600 space-y-2 text-sm sm:text-base">
                            <li><strong>School Hours:</strong> Monday to Friday | 9:00 AM – 1:00 PM (Extended care available upon request)</li>
                            <li><strong>Age Group:</strong> We welcome children aged 2 to 5 years.</li>
                            <li>
                                <strong>Location:</strong> 123 Happy Lane, Sunshine City, SC 12345
                                <br />
                                <a
                                    href="https://maps.google.com/?q=123+Happy+Lane,+Sunshine+City,+SC+12345"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-600 hover:underline"
                                >
                                    View on Google Maps
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* Section 2: Daily Routine */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Daily Routine
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Children thrive on routine! Our daily schedule includes:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Circle Time</li>
                            <li>Free Play & Exploration</li>
                            <li>Outdoor Activities</li>
                            <li>Snack Time</li>
                            <li>Storytelling & Music</li>
                            <li>Creative Arts & Crafts</li>
                            <li>Nap or Quiet Time (if applicable)</li>
                        </ul>
                    </section>

                    {/* Section 3: Meals & Snacks */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Meals & Snacks
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We encourage healthy eating habits. Parents are asked to:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Pack a nut-free, nutritious snack and lunch.</li>
                            <li>Label all containers and water bottles.</li>
                            <li>Inform staff of any allergies or dietary restrictions.</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-2">
                            <strong>Optional:</strong> We offer a healthy lunch plan.{' '}
                            <a href="mailto:info@apnachhotaschool.com" className="text-amber-600 hover:underline">
                                Contact us
                            </a>{' '}
                            to enroll.
                        </p>
                    </section>

                    {/* Section 4: What to Bring */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            What to Bring
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Please send your child with the following items each day:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>A labeled water bottle</li>
                            <li>A small backpack</li>
                            <li>Extra clothes (in a labeled bag)</li>
                            <li>Diapers/wipes (if applicable)</li>
                            <li>Weather-appropriate gear (hat, sunscreen, jacket)</li>
                        </ul>
                    </section>

                    {/* Section 5: Enrollment & Fees */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Enrollment & Fees
                        </h2>
                        <ul className="list-none text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>
                                <strong>Enrollment Form:</strong>{' '}
                                <a
                                    href="https://www.apnachhotaschool.com/enrollment"
                                    className="text-amber-600 hover:underline"
                                >
                                    Available online
                                </a>{' '}
                                or in the office
                            </li>
                            <li><strong>Required Documents:</strong> Birth certificate, immunization record, emergency contact info</li>
                            <li>
                                <strong>Tuition Fees:</strong>{' '}
                                <a
                                    href="https://www.apnachhotaschool.com/fees"
                                    className="text-amber-600 hover:underline"
                                >
                                    View fee structure
                                </a>
                            </li>
                            <li><strong>Payment Methods:</strong> Bank transfer, UPI, cheque, cash</li>
                        </ul>
                    </section>

                    {/* Section 6: Communication with Parents */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Communication with Parents
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We believe in open and regular communication. We provide updates via:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Monthly newsletters</li>
                            <li>Parent-teacher meetings</li>
                            <li>Classroom WhatsApp groups</li>
                            <li>Daily diaries or school app</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-2">
                            Have a concern or question? Feel free to{' '}
                            <a href="mailto:info@apnachhotaschool.com" className="text-amber-600 hover:underline">
                                email
                            </a>{' '}
                            or{' '}
                            <a href="tel:+1234567890" className="text-amber-600 hover:underline">
                                call us
                            </a>{' '}
                            anytime.
                        </p>
                    </section>

                    {/* Section 7: Health & Safety */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Health & Safety
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Your child’s safety is our top priority:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Regular cleaning and sanitization</li>
                            <li>Trained staff in first aid and emergency procedures</li>
                            <li>Secure entry/exit with sign-in/out protocols</li>
                            <li>Health checks upon arrival</li>
                        </ul>
                    </section>

                    {/* Section 8: Events & Celebrations */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Events & Celebrations
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We love to celebrate learning and milestones with:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Birthday celebrations (simple and optional)</li>
                            <li>Annual Day & Sports Day</li>
                            <li>Festivals and cultural events</li>
                            <li>Themed activity weeks</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-2">
                            Parental involvement is always welcome!
                        </p>
                    </section>

                    {/* Section 9: Contact Us */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            Contact Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Need help or more details? Reach out to us anytime.
                        </p>
                        <ul className="list-none mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li><strong>Apna Chhota School</strong></li>
                            <li>Basti Vikas Kendra, Harijan Basti, Chuna Bhatti, Near Nirankari- Satsang Bhawan, Kirti Nagar, New Delhi -110015</li>
                            <li>
                                <a href="tel:+919910741417" className="text-amber-600 hover:underline">
                                    (+91) 99107 41417
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@apnachhotaschool.com" className="text-amber-600 hover:underline">
                                    info@apnachhotaschool.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.apnachhotaschool.com"
                                    className="text-amber-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.apnachhotaschool.com
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}