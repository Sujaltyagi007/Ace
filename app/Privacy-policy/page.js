import Head from 'next/head';
import { Luckiest_Guy } from 'next/font/google';

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
});

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-transparent mt-14 md:mt-10">
            <Head>
                <title>Privacy Policy - Apna Chhota School</title>
                <meta
                    name="description"
                    content="Learn about Apna Chhota School's Privacy Policy, including how we collect, use, and protect personal information for parents, guardians, and children."
                />
                <meta
                    name="keywords"
                    content="Apna Chhota School, privacy policy, play school, data protection, child safety, parent information"
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Privacy Policy - Apna Chhota School" />
                <meta
                    property="og:description"
                    content="Understand how Apna Chhota School handles personal information, ensuring the safety and privacy of our community."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.apnachhotaschool.com/privacy-policy" />
                <meta property="og:image" content="https://www.apnachhotaschool.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy - Apna Chhota School" />
                <meta
                    name="twitter:description"
                    content="Understand how Apna Chhota School handles personal information, ensuring the safety and privacy of our community."
                />
                <meta name="twitter:image" content="https://www.apnachhotaschool.com/og-image.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: 'Privacy Policy',
                            url: 'https://www.apnachhotaschool.com/privacy-policy',
                            description:
                                'Privacy Policy for Apna Chhota School, detailing how we collect, use, and protect personal information.',
                            publisher: {
                                '@type': 'Organization',
                                name: 'Apna Chhota School',
                                contactPoint: {
                                    '@type': 'ContactPoint',
                                    telephone: '(+91) 9910741417',
                                    contactType: 'Customer Service',
                                    email: 'info@apnachhotaschool.com',
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <header className="bg-amber-600 text-white py-10 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-6 sm:gap-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center" role="heading" aria-level="1">
                        Privacy Policy
                    </h1>
                    <p className={`${lucky.className} text-2xl sm:text-3xl md:text-4xl text-center`}>
                        Apna Chhota School
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
                <div className="max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
                    {/* Section 1: Information We Collect */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We may collect the following types of personal information:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li><strong>Parent/Guardian Information:</strong> Name, phone number, email address, and home address.</li>
                            <li><strong>Child Information:</strong> Name, date of birth, health information (if applicable), and enrollment details.</li>
                            <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and time spent on the site (collected via cookies or analytics tools).</li>
                        </ul>
                    </section>

                    {/* Section 2: How We Use the Information */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            2. How We Use the Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We use collected information to:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Respond to inquiries or enrollment applications.</li>
                            <li>Provide updates on school events, programs, and notices.</li>
                            <li>Ensure the safety and well-being of enrolled children.</li>
                            <li>Improve our website’s performance and usability.</li>
                        </ul>
                    </section>

                    {/* Section 3: Sharing of Information */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            3. Sharing of Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We do not sell, rent, or trade personal information. We may share information only in the following situations:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>With service providers who help operate our website (e.g., hosting services).</li>
                            <li>When legally required (e.g., by government or legal authorities).</li>
                            <li>With parental or guardian consent, in cases involving child safety or emergencies.</li>
                        </ul>
                    </section>

                    {/* Section 4: Use of Photos and Media */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            4. Use of Photos and Media
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We may take photographs or videos during school activities for educational and promotional purposes. We obtain written consent from parents or guardians before using any child’s image on our website or social media platforms.
                        </p>
                    </section>

                    {/* Section 5: Cookies and Tracking */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            5. Cookies and Tracking
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Our website may use cookies to improve your browsing experience and analyze website traffic. You can choose to disable cookies in your browser settings.
                        </p>
                    </section>

                    {/* Section 6: Security Measures */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            6. Security Measures
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            We implement appropriate technical and organizational measures to protect the data we collect from unauthorized access, loss, or misuse.
                        </p>
                    </section>

                    {/* Section 7: Your Rights */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            7. Your Rights
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Parents and guardians have the right to:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li>Access or update their or their child’s personal information.</li>
                            <li>Withdraw consent at any time (where applicable).</li>
                            <li>Request deletion of personal data, subject to legal or administrative requirements.</li>
                        </ul>
                    </section>

                    {/* Section 8: Contact Us */}
                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4" role="heading" aria-level="2">
                            8. Contact Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            If you have any questions about this Privacy Policy or how your information is handled, please contact us:
                        </p>
                        <ul className="list-none mt-2 text-gray-600 space-y-2 text-sm sm:text-base">
                            <li><strong>Apna Chhota School</strong></li>
                            <li>Basti Vikas Kendra, Harijan Basti, Chuna Bhatti, Near Nirankari- Satsang Bhawan, Kirti Nagar, New Delhi -110015</li>
                            <li><a href="tel:+919910741417" className="text-amber-600 hover:underline">(+91) 99107 41417</a></li>
                            <li><a href="mailto:info@apnachhotaschool.com" className="text-amber-600 hover:underline">info@apnachhotaschool.com</a></li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}