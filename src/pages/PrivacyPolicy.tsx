import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { config, formatFullAddress, getHelpText, getStopText } from "@/lib/config";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-base">
                Last Updated: {config.legal.lastUpdated}
              </p>
            </div>

            <Card className="border-border shadow-lg rounded-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {config.companyName} ("we," "us," or "our") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you use our services, including our SMS text messaging service.
                  </p>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    1. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-none pl-0 text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span><strong className="text-foreground">SMS Subscription Data:</strong> Mobile phone number, consent status, opt-in date and time</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span><strong className="text-foreground">Communication Preferences:</strong> Your message frequency preferences and communication history</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our services</span>
                    </li>
                  </ul>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-none pl-0 text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Send SMS messages related to {config.useCase}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Improve our services and user experience</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Comply with legal obligations and enforce our terms</span>
                    </li>
                  </ul>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    3. SMS Text Message Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our SMS messaging service is used for {config.useCase}.
                  </p>
                  <div className="bg-secondary border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-foreground font-semibold mb-5">
                      Mobile information will NOT be shared with third parties/affiliates for marketing/promotional purposes.
                    </p>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Frequency:</span>
                        <span>{config.messageFrequency}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Cost:</span>
                        <span>Message and data rates may apply</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Opt-Out:</span>
                        <span>{getStopText()}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Help:</span>
                        <span>{getHelpText()}</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    4. Information Sharing
                  </h2>
                  <p className="text-foreground font-semibold leading-relaxed mb-4">
                    We do not sell, trade, or transfer your personal information to third parties for marketing purposes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share information only in the following circumstances:
                  </p>
                  <ul className="list-none pl-0 text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>With service providers who assist in operating our business (under strict confidentiality agreements)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>When required by law or to protect our rights</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>In connection with a business transfer or merger</span>
                    </li>
                  </ul>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    5. A2P 10DLC Compliance
                  </h2>
                  <div className="bg-background border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      Our SMS services comply with A2P 10DLC (Application-to-Person 10-Digit Long Code) 
                      regulations and the Telephone Consumer Protection Act (TCPA).
                    </p>
                    <p className="text-foreground font-semibold mb-4">Our compliance practices include:</p>
                    <ul className="list-none pl-0 text-muted-foreground space-y-3">
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Obtaining explicit opt-in consent before sending SMS messages</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Providing clear opt-out instructions in all communications</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Maintaining transparent disclosures about message frequency and costs</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Proper registration with The Campaign Registry (TCR)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Honoring all opt-out requests immediately</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Maintaining records of consent with timestamps</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    6. Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-none pl-0 text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Access the personal information we hold about you</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Request deletion of your personal information</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Opt-out of SMS communications at any time</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Withdraw consent for data processing</span>
                    </li>
                  </ul>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    7. Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    8. Contact Information
                  </h2>
                  <div className="bg-secondary border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-muted-foreground mb-5">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-20">Company:</span>
                        <span>{config.companyName}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-20">Address:</span>
                        <span>{formatFullAddress()}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-20">Phone:</span>
                        <span>{config.contact.phone}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-20">Email:</span>
                        <span>{config.contact.email}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
