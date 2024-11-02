import { Shield, Lock, FileCheck } from "lucide-react";

const Security = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your data security is our top priority. We implement the highest standards of protection.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Encryption</h3>
            <p className="text-gray-500">
              End-to-end encryption for all sensitive data and communications
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p className="text-gray-500">
              Multi-factor authentication and role-based access control
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FileCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compliance</h3>
            <p className="text-gray-500">
              GDPR, CCPA, and SOC 2 Type II compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;