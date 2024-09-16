import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TermsAndConditions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Introduction</AccordionTrigger>
        <AccordionContent>
          Welcome to StayManager. These terms and conditions outline the rules
          and regulations for the use of Stay Manager&apos;s website or
          application, located at <br />
          <a
            href="https://staymanager404.vercel.app/"
            className="text-blue-400 hover:underline"
          >
            https://staymanager404.vercel.app/
          </a>
          . <br />
          By accessing or using this website/app, we assume you accept these
          terms and conditions. Do not continue to use Stay Manager if you do
          not agree to take all of the terms and conditions stated on this page.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>License to Use</AccordionTrigger>
        <AccordionContent>
          Unless otherwise stated, Stay Manager and/or its licensors own the
          intellectual property rights for all material on Stay Manager. All
          intellectual property rights are reserved. You may access this from
          Stay Manager for your own personal use subject to restrictions set in
          these terms and conditions.
          <br />
          You must not:
          <ul className="list-disc list-inside">
            <li>Republish material from Stay Manager</li>
            <li>Sell, rent, or sub-license material from Stay Manager</li>
            <li>Reproduce, duplicate or copy material from Stay Manager</li>
            <li>Redistribute content from Stay Manager</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>User Accounts</AccordionTrigger>
        <AccordionContent>
          When you create an account with us, you must provide us with accurate
          and complete information. Failure to do so constitutes a breach of the
          terms, which may result in the immediate termination of your account.
          <br />
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your account.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Privacy</AccordionTrigger>
        <AccordionContent>
          Your use of Stay Manager is also governed by our [Privacy Policy].
          Please review our Privacy Policy for more information on how we
          collect, use, and protect your personal data.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Limitation of Liability</AccordionTrigger>
        <AccordionContent>
          In no event shall Stay Manager, nor its directors, employees, or
          affiliates, be liable for any damages arising out of your use of the
          website/app, or any of the content, services, or products provided.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Changes to Terms</AccordionTrigger>
        <AccordionContent>
          We reserve the right to update these terms and conditions at any time.
          Your continued use of the website or app after any changes will
          constitute acceptance of those changes.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Contact Us</AccordionTrigger>
        <AccordionContent>
          If you have any questions about these Terms and Conditions, please
          contact us at
          <div className="flex items-center gap-10 flex-wrap mt-5">
            <ul className="list-disc list-inside mx-8">
              <h1 className="font-semibold text-lg">Joy Das</h1>
              <li> joy600508@gmail.com</li>
              <li> +880 1772 838734</li>
            </ul>
            <ul className="list-disc list-inside mx-8">
              <h1 className="font-semibold text-lg">Sakib Talukqder</h1>
              <li>sakibtalukqder07@gmail.com</li>
              <li>+88 01799 232910</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
