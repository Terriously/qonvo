
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pt-16">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions - Qonvo AI-Powered Calling Services</h1>
            
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p>
                  Welcome to Qonvo AI ("we," "us," or "our"). We provide AI-powered calling services, acting as an outsourced contact center for our Clients ("Clients"). We utilize various third-party calling platforms to deliver these services, operating on behalf of our Clients. These Terms and Conditions ("Terms") govern your interaction with our services. By engaging with our services, you ("you" or "the Recipient") agree to comply with and be bound by these Terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">2. Data Protection and GDPR Compliance</h2>
                <p className="mb-3">
                  We are committed to protecting both Client and Recipient privacy by complying with global standards, including, but not limited to the General Data Protection Regulation (GDPR) and the New Zealand Privacy Act 2020.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Data Controller and Processor:</strong> For the purposes of GDPR, our Clients are the Data Controllers of the personal data processed through our AI-powered calling services. We act as Data Processors, processing personal data on their behalf and under their instructions, utilizing a third-party calling platform.</li>
                  <li><strong>Lawful Basis for Processing:</strong> We process your personal data based on the lawful basis provided by our Clients, which may include legitimate interest, consent, or contractual necessity.</li>
                  <li><strong>Data Collection and Use:</strong> We collect and process personal data that you provide during calls with our AI-powered systems, including voice recordings, call transcripts, and any information you share during the conversation. This data is used to:
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Provide the services requested by our Clients.</li>
                      <li>Improve the quality of our service delivery.</li>
                      <li>Analyze call data for quality assurance and reporting purposes, as directed by our clients.</li>
                      <li>Comply with legal obligations.</li>
                    </ul>
                  </li>
                  <li><strong>Data Security:</strong> We implement appropriate technical and organizational measures, in conjunction with the third-party calling platforms, to protect your personal data against unauthorized access, disclosure, alteration, and destruction.</li>
                  <li><strong>Data Retention:</strong> We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable laws and regulations, and according to our Clients instructions.</li>
                  <li><strong>Data Transfers:</strong> If your personal data is transferred outside the European Economic Area (EEA), we will ensure that appropriate safeguards are in place, such as standard contractual clauses or adequacy decisions, in conjunction with the third-party calling platform.</li>
                  <li><strong>Recording of Calls:</strong> Calls with our AI-enhanced systems may be recorded for quality assurance, training, and compliance purposes. You will be notified of call recording at the beginning of the call.</li>
                  <li><strong>Transparency:</strong> You will be informed of the identity of the Client on whose behalf we are calling, and the purpose of the call, at the beginning of each call. When asked, the AI-powered callers will never misrepresent as being a human caller.</li>
                  <li><strong>Third Party Platform:</strong> We utilize various third-party calling platforms to provide our services. The platforms have their own security and privacy policies that are adhered to.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">3. Use of AI Powered Calling Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Accuracy:</strong> While we strive to provide accurate and reliable AI-powered calling services, we do not guarantee the accuracy or completeness of the information provided by our systems.</li>
                  <li><strong>No Liability:</strong> We are not liable for any direct, indirect, or consequential damages arising from your use of our AI-powered calling services.</li>
                  <li><strong>Prohibited Use:</strong> You agree not to use our AI-powered calling services for any unlawful or prohibited purpose, including but not limited to:
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li>Harassing, abusing, or threatening others.</li>
                      <li>Distributing malware or other harmful software.</li>
                      <li>Engaging in fraudulent or deceptive activities.</li>
                      <li>Any other use that violates any applicable laws or regulations.</li>
                    </ul>
                  </li>
                  <li><strong>Service Availability:</strong> We make reasonable efforts to ensure the availability of our AI-enhanced calling services, but we do not guarantee uninterrupted or error-free service.</li>
                  <li><strong>Client Provided Information:</strong> The accuracy of information provided during calls is dependent on the information provided by the Client.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">4. Human Oversight and Agent Interaction</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our AI-powered calling service are administered by skilled human operators who are trained to follow client provided scripts and instructions.</li>
                  <li>All of our operators are subject to strict confidentiality agreements and undergo regular security and data protection training.</li>
                  <li>Operators will only have access to the minimum amount of data required to complete their assigned tasks.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We utilize third party platforms, and therefore are subject to their intellectual property rules.</li>
                  <li>Any intellectual property rights related to our specific agent training and call flows are owned by us or our licensors.</li>
                  <li>You are granted a limited, non-exclusive, and non-transferable license to interact with our AI-enhanced calling services for the purposes specified in these Terms.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">6. Changes to These Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on our website or by other means.</li>
                  <li>Your continued use of our AI-enhanced calling services after any changes to these Terms constitutes your acceptance of the revised Terms.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
                <p>If you have any questions or concerns about these Terms or our data protection practices, please contact us at:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Qonvo AI</li>
                  <li>EAA: Arent Janszoon Ernstraat 727, Amsterdam, Netherlands, 1082 LJ</li>
                  <li>Outside EAA: 5 Caulfield Place, Hamilton, New Zealand, 3200</li>
                  <li>twinter.qonvo@gmail.com</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">8. Governing Law and Arbitration</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>These Terms are governed by and construed in accordance with the laws of New Zealand.</li>
                  <li>Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the UNCITRAL Arbitration Rules as at present in force.</li>
                  <li>The seat, or legal place, of arbitration shall be London, United Kingdom.</li>
                  <li>The language to be used in the arbitral proceedings shall be English.</li>
                  <li>The number of arbitrators shall be One.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">9. Client Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clients are responsible for providing clear and lawful instructions to us regarding the processing of personal data.</li>
                  <li>Clients are responsible for ensuring they have a lawful basis for processing the data they provide to our service.</li>
                  <li>Clients are responsible for handling and responding to data subject requests.</li>
                  <li>Clients are responsible for the accuracy of any data they provide for use within the calling platform.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
