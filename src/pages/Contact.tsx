import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { config, formatFullAddress } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  smsConsent: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully!");
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="py-16 lg:py-24 bg-muted/40 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <Card className="max-w-lg mx-auto border-border shadow-lg text-center rounded-xl">
              <CardContent className="pt-12 pb-10 px-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
                  Message Sent!
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Thank you for contacting {config.companyName}. We'll get back to you as soon as possible.
                </p>
                <Button asChild size="lg" className="h-12 px-8">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return to Home
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="border-border shadow-sm h-full rounded-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl">Get in Touch</CardTitle>
                  <CardDescription className="text-base">
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{formatFullAddress()}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <a
                        href={`tel:${config.contact.phoneRaw}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {config.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a
                        href={`mailto:${config.contact.email}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {config.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-lg rounded-xl">
                <CardHeader className="pb-2 px-6 lg:px-8 pt-8">
                  <CardTitle className="font-serif text-xl">Send a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 lg:px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="resize-none"
                      />
                    </div>

                    {/* Optional SMS Consent */}
                    <div className="bg-secondary p-5 rounded-xl border border-border/50">
                      <h4 className="font-medium text-foreground mb-4 text-sm">Optional SMS Updates</h4>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="smsConsent"
                          checked={formData.smsConsent}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, smsConsent: checked as boolean })
                          }
                          className="mt-1"
                          aria-describedby="sms-consent-description"
                        />
                        <Label 
                          id="sms-consent-description"
                          htmlFor="smsConsent" 
                          className="text-sm leading-relaxed cursor-pointer text-muted-foreground"
                        >
                          If you wish to receive SMS text messages from {config.companyName}, please check the box. 
                          By checking this box, you give consent to receive SMS for {config.useCase} according to our{" "}
                          <Link to="/terms" className="text-foreground hover:underline font-medium">
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy-policy" className="text-foreground hover:underline font-medium">
                            Privacy Policy
                          </Link>. 
                          {config.messageFrequency}. Standard message and data rates may apply. 
                          For HELP, text {config.contact.phone}. Text STOP to unsubscribe.
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base" 
                      size="lg" 
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
