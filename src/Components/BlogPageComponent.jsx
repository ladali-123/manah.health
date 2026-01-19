export default function BlogPage({ blogData }) {
  // Process keyPoints to replace "**1" with bold "1" on a new line
  const processedKeyPoints = blogData.keyPoints.map(point =>
    point.replace(/\*\*1/g, '<br><strong>1</strong>')
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>

      {/* Date */}
      <p className="text-gray-500 mb-6">{blogData.date}</p>

      {/* Image */}
      <img
        src={blogData.image}
        alt={blogData.title}
        className="w-full rounded-xl shadow mb-10"
      />

      {/* Description */}
      <p className="text-xl text-gray-700 mb-10">{blogData.description}</p>

      {/* Main Content */}
      <div
        className="prose prose-lg text-justify max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: blogData.text1 }}
      ></div>

      {/* Crux */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Crux</h2>
      <div
        className="prose prose-lg text-gray-700 max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: blogData.crux }}
      ></div>

      {/* Hook Title */}
      <h2 className="text-2xl font-semibold mb-3">{blogData.hookTitle}</h2>
      <div
        className="prose prose-lg text-gray-700 max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: blogData.hookText }}
      ></div>

      {/* KEY POINTS ( Bold HTML ) */}
      <ul className="ml-2 space-y-3 text-lg text-gray-800">
        {processedKeyPoints.map((point, index) => (
          <li key={index}>
            <span
              className="font-bold bg-yellow-100 px-2 py-1 rounded"
              dangerouslySetInnerHTML={{ __html: point }}
            ></span>
          </li>
        ))}
      </ul>

      {/* DIAGNOSIS */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        {blogData.diagnosis.title}
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-lg text-gray-800">
        {blogData.diagnosis.content.map((item, i) => (
          <li key={i}>
            {/* FIX — allow bold inside list */}
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </li>
        ))}
      </ol>

      {/* REMEDIES */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        {blogData.remedies.title}
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-lg text-gray-800">
        {blogData.remedies.content.map((item, i) => (
          <li key={i}>
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </li>
        ))}
      </ol>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Conclusion</h2>
      <div
        className="prose prose-lg text-gray-700 mb-20"
        dangerouslySetInnerHTML={{ __html: blogData.conclusion }}
      ></div>
    </div>
  );
}
