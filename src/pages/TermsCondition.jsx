import React from 'react'

function TermsCondition() {
  return (
    <section className="pt-32 pb-12 bg-[#5454C5]">
      <div className="custom-container px-4">
        <h1 className='text-white text-2xl md:text-3xl font-bold font-baskerville'>📄 Terms and Conditions</h1>
        <div className="sub-title mt-4 font-outfit">
          <h2 className='text-white md:text-2xl text-xl'>Effective Date: 10-04-2025</h2>
          <p className='text-gray-300'>
            Welcome to Resellio. By accessing or using our website located at <strong>Resellio.in</strong> (“Resellio”), you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
          </p>
        </div>
        <div className="terms-content font-outfit mt-10 flex flex-col gap-5">
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>1. Acceptance of Terms</h3>
            <p className='text-gray-300'>
              By using our platform, you agree to these Terms and any future modifications. These Terms govern your use of the site and services, so if you do not agree, you must not access the platform. We recommend reviewing these Terms periodically.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>2. Use of the Website</h3>
            <p className='text-gray-300'>
              You agree to use this website only for legitimate and authorized purposes. Misuse, exploitation, or any attempt to disrupt our services is strictly prohibited and may result in account suspension or legal action.
            </p>
            <ul className='text-gray-300 list-disc pl-5'>
              <li>Violating any local, national, or international law or regulation.</li>
              <li>Attempting to gain unauthorized access to our systems.</li>
              <li>Using the site in any manner that could damage or disable our services.</li>
            </ul>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>3. Account Responsibility</h3>
            <p className='text-gray-300'>
              When you create an account on Resellio, you are responsible for safeguarding your login credentials. You agree to notify us immediately if you suspect unauthorized access or any breach of security related to your account.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>4. Intellectual Property</h3>
            <p className='text-gray-300'>
              All content and materials on Resellio, including design, logos, images, and software, are owned or licensed by us. You are not permitted to reuse, reproduce, or redistribute any of our content without written permission.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>5. Limitation of Liability</h3>
            <p className='text-gray-300'>
              Resellio is provided “as is” without warranties of any kind. We do not guarantee continuous or error-free operation and are not liable for any indirect or consequential loss due to site usage or unavailability.
            </p>
          </div>
          <div className="terms">
            <h3 className='text-white md:text-xl text-lg'>6. Changes to the Terms</h3>
            <p className='text-gray-300'>
              We may revise these Terms at any time. If changes are made, they will be effective immediately upon being posted on our site. You are responsible for reviewing updates and continued use indicates acceptance of the revised terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsCondition
