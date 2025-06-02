'use client'

import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

export default function PrivacyPolicy() {
    
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacyPolicy.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);


    return(
            <div className="p-6 max-w-3xl mx-auto">
      <div className="prose prose-sm sm:prose lg:prose-lg pt-16">

          <Markdown remarkPlugins={[remarkBreaks]}>
            {content.replace(/\n/gi, "&nbsp; \n")}
          </Markdown>

      </div>
    </div>
    )
}