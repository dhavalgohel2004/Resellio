import React from 'react'

function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-12 bg-[#5454C5]">
      <div className="custom-container px-4">
        <h1 className='text-white text-2xl md:text-3xl font-bold font-baskerville'>🔒 Privacy Policy</h1>
        <div className="sub-title mt-4 font-outfit">
          <h2 className='text-white md:text-2xl text-xl'>Effective Date: 10-04-2025</h2>
          <p className='text-gray-300'>
            At Resellio, your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            By using our website, you consent to the practices described here.
          </p>
        </div>
        <div className="terms-content font-outfit mt-10 flex flex-col gap-5">
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>1. Information We Collect</h3>
            <ul className='text-gray-300 list-disc pl-5'>
              <li><strong>Personal Information:</strong> We may collect your name, email address, phone number, and login credentials when you register or interact with our services.</li>
              <li><strong>Usage Data:</strong> We gather data such as your IP address, browser type, device info, and access times to understand how users interact with our site.</li>
              <li><strong>Cookies & Tracking:</strong> Cookies and similar technologies may be used to enhance user experience and personalize content or ads.</li>
            </ul>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>2. How We Use Your Data</h3>
            <p className='text-gray-300'>
              We use your information to provide a seamless and secure experience. This includes authenticating your access, improving our platform,
              and customizing your interaction based on your preferences.
            </p>
            <ul className='text-gray-300 list-disc pl-5'>
              <li>To deliver and improve the features and functionality of our website.</li>
              <li>To communicate service updates, promotional offers, and support-related messages.</li>
              <li>To analyze site performance, detect suspicious activity, and enhance security.</li>
            </ul>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>3. Data Sharing</h3>
            <p className='text-gray-300'>
              We do not sell or rent your personal information to any third parties. Your data may be shared with trusted third-party partners 
              (like hosting or analytics providers) solely to help us operate and improve our services.
              These partners are bound by strict confidentiality agreements and are only allowed to use your data for intended purposes.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>4. Data Security</h3>
            <p className='text-gray-300'>
              We prioritize the security of your data and implement a range of administrative, technical, and physical safeguards to protect it.
              While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee absolute security
              due to the nature of online transmissions and evolving threats.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>5. Your Rights</h3>
            <p className='text-gray-300'>
              You have full control over your data. You may request to view, update, or delete the personal information we have about you.
              If you'd like to exercise these rights, please reach out to us. We are committed to honoring your data privacy choices within a reasonable time frame.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>6. Contact Us</h3>
            <p className='text-gray-300'>
              If you have any concerns or questions about this Privacy Policy or how your data is handled, feel free to contact our support team.
              You can reach us via email at <a href="mailto:reach@resellio.com" className="underline">reach@resellio.com</a>, and we’ll be happy to assist you.
              Your trust is important to us, and we take privacy matters seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy;
