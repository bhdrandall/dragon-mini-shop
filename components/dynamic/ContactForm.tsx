"use client";
import React from 'react';
import { ContactFormData } from '@/lib/component-types';

interface ContactFormProps {
  data: ContactFormData;
}

export function ContactForm({ data }: ContactFormProps) {
  // Netlify Forms: no JS submit logic, just native form submit
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {data.title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            {data.title}
          </h2>
        )}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Netlify hidden form-name field */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Netlify honeypot field for spam protection */}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          {data.fields.map((field, index) => (
            <div key={index}>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  required={field.required}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {field.label}
                  </option>
                  {field.options && field.options.map((option: string, i: number) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  rows={5}
                />
              ) : (
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            {data.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}