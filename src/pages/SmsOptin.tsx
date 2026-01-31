import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { config, getHelpText, getStopText } from "@/lib/config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

const SmsOptin = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length >= 10 && cleaned.length <= 15;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please check the consent box to continue.");
      return;
    }

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Successfully subscribed to SMS updates!");
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
                  You're Subscribed!
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Thank you for subscribing to SMS updates from {config.companyName}. 
                  You'll receive messages about {config.useCase}.
                </p>
                <div className="bg-secondary p-5 rounded-xl text-sm text-muted-foreground mb-8 space-y-2">
                  <p>{getStopText()}</p>
                  <p>{getHelpText()}</p>
                </div>
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
            <div className="inline-flex items-center gap-2 bg-foreground/5 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              SMS Subscription
            </div>
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
              Subscribe to SMS Updates
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Stay informed with timely notifications from {config.companyName} about {config.useCase}.
            </p>
          </div>

          <Card className="max-w-lg mx-auto border-border shadow-lg rounded-xl">
            <CardHeader className="pb-2 px-6 lg:px-8 pt-8">
              <CardTitle className="font-serif text-xl">SMS Opt-in Form</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below to subscribe to our SMS messaging service.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 lg:px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
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

                {/* Consent Checkbox */}
                <div className="bg-secondary p-5 rounded-xl border border-border/50">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, consent: checked as boolean })
                      }
                      className="mt-1"
                      aria-describedby="consent-description"
                    />
                    <Label 
                      id="consent-description"
                      htmlFor="consent" 
                      className="text-sm leading-relaxed cursor-pointer text-muted-foreground"
                    >
                      I consent to receive SMS messages from {config.companyName} related to {config.useCase}. 
                      {config.messageFrequency}. Message & data rates may apply. Reply STOP to unsubscribe, 
                      HELP for help. See our{" "}
                      <Link to="/terms" className="text-foreground hover:underline font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy-policy" className="text-foreground hover:underline font-medium">
                        Privacy Policy
                      </Link>.
                    </Label>
                  </div>
                </div>

                {/* Additional Disclosures */}
                <div className="bg-background border border-border/50 p-5 rounded-xl space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    Important Disclosures
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-foreground font-medium shrink-0">Opt-out:</span>
                      <span>{getStopText()}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground font-medium shrink-0">Help:</span>
                      <span>{getHelpText()}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground font-medium shrink-0">Frequency:</span>
                      <span>{config.messageFrequency}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground font-medium shrink-0">Cost:</span>
                      <span>Message and data rates may apply</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe to SMS Updates"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SmsOptin;
