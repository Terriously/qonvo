import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Qanvo</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              AI-powered front desk assistant for modern businesses
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Features</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookie Policy</li>
              <li>Licenses</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Qanvo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;