import BlogPage from "../../Components/BlogPageComponent";
import depr from "../../assets/depr.png"; // Use the existing depr.png from src/assets

export default function DepressionBlog() {
  const blogData = {
    title: "Depression is NOT just 'low mood' – Here’s what it actually feels like",
    description:
      "What does clinical depression really feel like? Beyond sadness – the physical heaviness, mental fog, and numbness. Learn the truth and how to get help.",
    date: "2026-05-14",
    image: depr,
    link: "/blog/depression-not-just-low-mood",
    tags: ["Depression", "Mental Health", "Symptoms", "Treatment", "Therapy"],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If I asked you to describe depression, what would you say? Most people would say: “Feeling very sad.” 
        But if you’ve ever actually experienced clinical depression – or watched someone you love go through it – 
        you know it’s nothing like ordinary sadness. Let me break this down in simple, everyday English. 
        No medical jargon. No judgment. Just the real truth.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 1: What depression is NOT</h2>
      <p>First, let’s clear up some common myths.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead>
          <tr style="background: #e5e7eb;">
            <th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Myth</th>
            <th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Truth</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Depression is just extreme sadness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Depression often involves no feeling at all – a blank, empty numbness</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">You can “snap out of it”</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">You cannot snap out of a broken leg. Same for a depressed brain</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Only people with a “bad life” get depression</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Depression can hit someone with a perfect life – money, love, success – all of it</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">If you function normally, you’re not depressed</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Many people with depression smile in public and break down alone (high-functioning depression)</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 2: What depression ACTUALLY feels like (real examples)</h2>
      <p>Here are the most common – and most misunderstood – symptoms.</p>
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">1. Your body feels heavy, like lead</h3>
      <p><em>“Getting out of bed feels like pushing a car uphill. Brushing my teeth takes 20 minutes of mental preparation.”</em></p>
      <p>Depression isn't "laziness". It's a physical heaviness. Your limbs feel like they're filled with wet sand. Every small task requires a war inside your head.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">2. You’re exhausted no matter how much you sleep</h3>
      <p><em>“I slept 10 hours. I woke up more tired than when I went to bed.”</em></p>
      <p>This is bone-deep fatigue. Your brain isn't producing the right chemicals to give you energy. Coffee doesn’t fix it. Weekends don’t fix it.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">3. Your brain stops working properly</h3>
      <ul>
        <li>You forget simple words mid-sentence.</li>
        <li>You read the same paragraph five times and understand nothing.</li>
        <li>You walk into a room and forget why.</li>
      </ul>
      <p>People think you’re dumb or careless. You’re not. Your brain is just fogged up by depression.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">4. Everything tastes like nothing (Anhedonia)</h3>
      <p><em>“I used to love playing guitar. Now I look at it and feel… nothing. Not sad. Just nothing.”</em></p>
      <p>Losing interest in things you once loved. Music sounds flat. Food has no taste. Jokes aren’t funny. Hugs feel hollow.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">5. Your body starts hurting</h3>
      <p>Depression causes real physical pain: tight chest (like someone sitting on you), chronic back pain, headaches that don’t go away, stomach problems (IBS, nausea). Tests come back “normal” but the pain is real.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">6. Guilt – for no reason</h3>
      <p><em>“I feel like I’ve committed a crime. I haven’t. But my brain keeps telling me I’m a terrible person.”</em></p>
      <p>Depression lies to you. It makes you feel guilty for existing. Guilty for resting. Guilty for not being "productive".</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 3: The difference between sadness and depression</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem;">Normal Sadness</th><th style="border: 1px solid #d1d5db; padding: 0.75rem;">Clinical Depression</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Happens after a clear event (loss, failure)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Can happen without any trigger</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Lasts a few days to a week</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Lasts 2+ weeks, often months or years</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">You still enjoy some things</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">You feel empty or numb most of the time</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Sleep disturbed for a night or two</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Sleep problems every single night</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">You can usually function at work/school</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Basic tasks (showering, eating) become extremely hard</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Talking to a friend helps</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Talking feels exhausting and doesn’t help</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">No physical pain</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Real body aches, headaches, stomach issues</td></tr>
        </tbody>
      </table>
      <p><strong>One analogy:</strong> Sadness is rain. Depression is a flood. Rain soaks you, but you can go inside and dry off. A flood destroys your house and you don’t even remember what “dry” feels like.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 4: Why “just be positive” is the worst advice</h2>
      <p>Imagine telling someone with a broken leg: “Just walk it off.” When you tell a depressed person “Just think positive” – you’re not helping. You’re making them feel more broken. Depression is a medical condition affecting neurotransmitters (serotonin, dopamine, norepinephrine). You can’t “think” your way out of a chemical imbalance.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 5: What actually helps? (Practical steps)</h2>
      <h3>Step 1: Stop blaming yourself</h3>
      <p>You are not weak, lazy, or a bad person. You are sick, and sickness deserves treatment, not shame.</p>
      <h3>Step 2: Talk to a professional</h3>
      <p>Therapist / counselor for talk therapy (CBT works very well). Psychiatrist for medication if needed. Taking antidepressants for depression is like taking insulin for diabetes – it helps your brain work normally.</p>
      <h3>Step 3: Tell ONE person</h3>
      <p>Pick a friend, parent, sibling – say: “I’m not okay. I think I have depression. I don’t need advice. I just need you to know.”</p>
      <h3>Step 4: Micro-actions</h3>
      <p>Don’t aim for “exercise more”. Instead: stand up for 30 seconds, drink one glass of water, open the curtains, wash your face. That’s a win.</p>
      <h3>Step 5: Create a tiny routine</h3>
      <p>Wake up at the same time (even if you stay in bed). Eat one meal at the same time every day. Step outside for 2 minutes of sunlight.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 6: How to help someone with depression (for friends/family)</h2>
      <p><strong>Don’t say:</strong> “Just cheer up”, “Other people have it worse”, “Have you tried yoga?”</p>
      <p><strong>Do say:</strong> “I’m here. I’m not going anywhere.” “You don’t have to talk. I can just sit with you.” “What’s one small thing I can help with today?” “This is not your fault.”</p>
      <p>Don’t try to fix them. Just listen. Just stay.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Part 7: Hope – real hope, not toxic positivity</h2>
      <p>Depression is treatable. 80-90% of people eventually respond well to treatment. Therapy + medication (or either alone) works for the vast majority. Recovery doesn’t mean being happy 24/7 – it means the heaviness becomes lighter, you can shower without crying, you laugh at a silly video for 2 seconds. Over time, good days appear more often.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Final words – for anyone reading this who is struggling</h2>
      <p>If you are in that dark place right now – where getting out of bed feels impossible, where your own mind is screaming that you’re worthless – please hear me: You are not alone. You are not broken. You are not a burden. Depression is a liar. Things can change – but you need help to get there. There is absolutely no shame in asking for help.</p>
      <p><em>“The difference between sadness and depression is like the difference between a rainy day and drowning in the ocean.”</em> If you’re drowning, reach out. Even if you can only lift one finger. Someone will grab it. You matter. You really, really do. 💙</p>
    `,

    crux: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #3b82f6; border-radius: 0.5rem;">
        <strong>Depression is not just “feeling sad” – it’s a heavy, numbing exhaustion that affects your body, brain, and emotions. 
        From physical pain to complete loss of interest, this guide explains what depression actually feels like and gives practical steps 
        to find help and hope.</strong>
      </p>
    `,

    hookTitle: "What Depression Actually Feels Like",
    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you’ve ever experienced clinical depression or watched someone you love go through it, you know it’s nothing like ordinary sadness. 
        Here’s the real truth – no medical jargon, no judgment.
      </p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Depression causes physical heaviness and bone-deep fatigue, not just emotional sadness</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Loss of interest in things you once loved (anhedonia) – music, food, hobbies feel hollow</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Depression creates real physical pain: headaches, back pain, stomach issues, tight chest</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Brain fog – forgetting words, unable to concentrate, reading the same paragraph five times</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Overwhelming guilt for no reason – depression lies and makes you feel worthless</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Depression is treatable – 80-90% respond well to therapy, medication, or both</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Micro-actions (standing up, drinking water, opening curtains) are real wins</span>"
    ],

    diagnosis: {
      title: "Common Signs of Depression (How It Shows Up)",
      content: [
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Persistent sad, anxious, or “empty” mood lasting 2+ weeks</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Loss of interest or pleasure in hobbies and activities (anhedonia)</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Physical symptoms: fatigue, headaches, digestive problems, chronic pain</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Sleep disturbances – insomnia or sleeping too much</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Difficulty concentrating, remembering, or making decisions</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Feelings of worthlessness or excessive guilt</span>"
      ]
    },

    remedies: {
      title: "Practical Steps to Manage Depression",
      content: [
        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Talk to a professional:</strong> Therapist (CBT) or psychiatrist for medication assessment</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Micro-actions:</strong> Stand up for 30 seconds, drink water, open curtains – small wins matter</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Tiny routine:</strong> Wake same time, eat one meal at same time, 2 minutes of sunlight</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Tell one person:</strong> “I’m not okay. I don’t need advice, just need you to know.”</span>",
        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Stop blaming yourself:</strong> Depression is a medical condition, not a character flaw</span>"
      ]
    },

    conclusion: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Depression is a liar. It tells you nothing will ever change – but that is not true. With the right help (therapy, medication, support), 
        the heaviness becomes lighter. Good days start appearing more often. You are not alone, not broken, not a burden.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you are drowning, reach out – even if you can only lift one finger. Someone will grab it. You matter. 💙
      </p>
    `,

    faqs: [
      { question: "Is depression just extreme sadness?", answer: "No. Depression often involves emptiness, numbness, physical heaviness, and loss of interest – not just sadness." },
      { question: "Can depression cause physical pain?", answer: "Yes. Depression commonly causes headaches, back pain, chest tightness, stomach issues, and chronic fatigue." },
      { question: "How do I know if I have depression or just sadness?", answer: "Sadness passes after a few days and is tied to an event. Depression lasts 2+ weeks, affects sleep, appetite, energy, and makes daily tasks extremely hard." },
      { question: "Do I need medication for depression?", answer: "Not always. Therapy (especially CBT) helps many people. But if a psychiatrist recommends medication, it's like insulin for diabetes – it corrects a chemical imbalance." },
      { question: "What should I say to someone with depression?", answer: "Say: 'I'm here. I'm not going anywhere.' 'What's one small thing I can help with today?' Avoid 'cheer up' or 'others have it worse.'" },
      { question: "Is depression curable?", answer: "It is highly treatable. 80-90% of people respond well to treatment. Recovery means symptoms become manageable and good days increase over time." }
    ]
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}