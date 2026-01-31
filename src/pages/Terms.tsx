import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { config, formatFullAddress, getHelpText, getStopText } from "@/lib/config";

const Terms = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground text-base">
                Last Updated: {config.legal.lastUpdated}
              </p>
            </div>

            <Card className="border-border shadow-lg rounded-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Welcome to {config.companyName}. By accessing or using our services, you agree to be 
                    bound by these Terms of Service. Please read them carefully.
                  </p>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using our services, including our website and SMS messaging service, 
                    you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                    If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    2. SMS Text Message Service Terms
                  </h2>
                  <div className="bg-secondary border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-foreground font-semibold mb-5">Consent Statement</p>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      By providing your mobile phone number and checking the consent box, you expressly 
                      consent to receive SMS from {config.companyName} for {config.useCase}.
                    </p>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Frequency:</span>
                        <span>{config.messageFrequency}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Charges:</span>
                        <span>Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Opt-Out:</span>
                        <span>{getStopText()}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Help:</span>
                        <span>{getHelpText()}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-foreground font-medium shrink-0 w-28">Confirmation:</span>
                        <span>You will receive a confirmation message when you opt out.</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    3. A2P 10DLC Compliance
                  </h2>
                  <div className="bg-background border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-foreground font-semibold leading-relaxed mb-5">
                      Our SMS services comply with A2P 10DLC (Application-to-Person 10-Digit Long Code) 
                      regulations and the Telephone Consumer Protection Act (TCPA).
                    </p>
                    <p className="text-foreground font-semibold mb-4">Our compliance practices include:</p>
                    <ul className="list-none pl-0 text-muted-foreground space-y-3">
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Explicit consent is required before sending any SMS messages</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Clear opt-out instructions are provided in all communications</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Consent records are maintained with timestamps</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>Messages are only sent for the stated purposes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                        <span>All opt-out requests are honored immediately</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    4. Use of Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. 
                    You agree not to:
                  </p>
                  <ul className="list-none pl-0 text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Use the service in any way that violates any applicable law or regulation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Provide false or misleading information</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Interfere with or disrupt the service or servers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                      <span>Attempt to gain unauthorized access to any portion of the service</span>
                    </li>
                  </ul>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    5. Privacy and Data Protection
                  </h2>
                  <div className="bg-secondary border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-foreground font-semibold mb-5">
                      We will never sell or share your mobile number with third parties for marketing purposes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Your use of our services is also governed by our Privacy Policy, which is incorporated 
                      into these Terms by reference. Please review our Privacy Policy to understand our practices 
                      regarding your personal information.
                    </p>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To the fullest extent permitted by applicable law, {config.companyName} shall not be liable 
                    for any indirect, incidental, special, consequential, or punitive damages, including but not 
                    limited to loss of profits, data, or other intangible losses, resulting from your use or 
                    inability to use the service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wireless carriers are not liable for delayed or undelivered messages.
                  </p>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    7. Changes to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                    we will provide at least 30 days' notice prior to any new terms taking effect. Your continued 
                    use of the service after any changes constitutes acceptance of those changes.
                  </p>

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    8. Contact Information
                  </h2>
                  <div className="bg-secondary border border-border/50 rounded-xl p-6 lg:p-8 my-8">
                    <p className="text-muted-foreground mb-5">
                      If you have any questions about these Terms of Service, please contact us:
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

                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mt-12 mb-6">
                    9. Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of {config.legal.state}, 
                    without regard to its conflict of law provisions. Any disputes arising under these Terms shall 
                    be subject to the exclusive jurisdiction of the courts located in {config.legal.state}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
