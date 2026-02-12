import React, { useState } from "react";

export default function BlogPage({ blogData }) {
  // Process keyPoints to replace "**1" with bold "1" on a new line
  const processedKeyPoints = (blogData.keyPoints || []).map((point) =>
    point.replace(/\*\*1/g, "<br><strong>1</strong>")
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{blogData.title}</h1>

      {/* Date */}
      <p className="text-lg text-gray-900 mb-10">{blogData.date}</p>

      {/* Image */}
      <img
        src={blogData.image}
        alt={blogData.title}
        className="w-full rounded-xl shadow-lg mb-14 object-cover"
      />

      {/* Description */}
      <p className="text-xl text-gray-900 mb-14 leading-relaxed">{blogData.description}</p>

      {/* Main Content */}
      <div
        className="text-gray-900 max-w-none mb-20 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-20 [&_h3]:mb-10 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:mt-14 [&_h4]:mb-8 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-8 [&_p]:text-gray-700 [&_strong]:text-gray-900 [&_em]:italic [&_ul]:my-10 [&_ul]:ml-8 [&_ol]:my-10 [&_ol]:ml-8 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-gray-700 [&_li]:mb-6"
        dangerouslySetInnerHTML={{ __html: blogData.text1 }}
      ></div>

      {/* Crux */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-10 mb-20 rounded-r-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Crux</h2>
        <div
          className="text-gray-700 max-w-none [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-10 [&_p]:text-gray-700 [&_strong]:text-gray-900"
          dangerouslySetInnerHTML={{ __html: blogData.crux }}
        ></div>
      </div>

      {/* Hook Title */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">{blogData.hookTitle}</h2>
      <div
        className="text-gray-700 max-w-none mb-14 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogData.hookText }}
      ></div>

      {/* KEY POINTS ( Bold HTML ) */}
      <ul className="ml-4 space-y-8 mb-20">
        {processedKeyPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block">
              <svg className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: point }}
            ></span>
          </li>
        ))}
      </ul>

      {/* DIAGNOSIS */}
      <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.diagnosis.title}</h2>
      <ol className="list-decimal ml-8 space-y-8 mb-20">
        {blogData.diagnosis.content.map((item, i) => (
          <li key={i} className="text-lg text-gray-700 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </li>
        ))}
      </ol>

      {/* WARNING SIGNS */}
      {blogData.warningSigns && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.warningSigns.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700 [&_strong]:text-gray-900 [&_ul]:my-10 [&_ul]:ml-8 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-gray-700 [&_li]:mb-6">
            {blogData.warningSigns.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* EFFECTS */}
      {blogData.effects && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.effects.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700 [&_strong]:text-gray-900 [&_br]:block">
            {blogData.effects.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* MANIPULATION */}
      {blogData.manipulation && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.manipulation.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700">
            {blogData.manipulation.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* SOLUTION WARNING */}
      {blogData.solutionWarning && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.solutionWarning.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700">
            {blogData.solutionWarning.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* WHEN TO SEE DOCTOR */}
      {blogData.whenToSeeDoctor && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.whenToSeeDoctor.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700">
            {blogData.whenToSeeDoctor.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* MANAH SERVICES */}
      {blogData.manahServices && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.manahServices.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700 [&_strong]:text-gray-900">
            {blogData.manahServices.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* STIGMA */}
      {blogData.stigma && (
        <>
          <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.stigma.title}</h2>
          <div className="text-gray-700 max-w-none mb-20 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700">
            {blogData.stigma.content.map((item, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </>
      )}

      {/* REMEDIES */}
      <h2 className="text-3xl font-semibold mt-16 mb-10 text-gray-900">{blogData.remedies.title}</h2>
      <ol className="list-decimal ml-8 space-y-8 mb-20">
        {blogData.remedies.content.map((item, i) => (
          <li key={i} className="text-lg text-gray-900 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </li>
        ))}
      </ol>

      {/* Conclusion */}
      <h2 className="text-3xl font-semibold mt-14 mb-8 text-gray-900">Conclusion</h2>
      <div
        className="text-gray-700 max-w-none mb-28 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-12 [&_p]:text-gray-700 [&_strong]:text-gray-900"
        dangerouslySetInnerHTML={{ __html: blogData.conclusion }}
      ></div>

      {/* FAQs */}
      {blogData.faqs && blogData.faqs.length > 0 && (
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mt-14 mb-8 text-gray-900">Frequently Asked Questions</h2>
          <FaqList faqs={blogData.faqs} />
        </div>
      )}
    </div>
  );
}

function FaqList({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center p-4 bg-white"
            aria-expanded={openIndex === i}
          >
            <span className="text-lg font-medium text-gray-900 text-left">{f.question}</span>
            <svg
              className={`w-6 h-6 text-blue-600 transform transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="p-6 bg-gray-50 text-gray-900 [&_p]:mb-6" dangerouslySetInnerHTML={{ __html: f.answer }} />
          )}
        </div>
      ))}
    </div>
  );
}
