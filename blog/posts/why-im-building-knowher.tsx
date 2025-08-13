
import React from 'react';

const supLinkClass = "text-purple-400 hover:text-purple-300 no-underline";
const sourceIdBmc = "source-bmc";
const sourceIdNcbi = "source-ncbi";
const sourceIdUcdavis = "source-ucdavis";
const sourceIdNature = "source-nature";


const WhyImBuildingKnowherContent: React.FC = () => {
  return (
    <>
      <h2>Facing PCOS at 18: My Hormonal Health Journey</h2>
      <p>
        At 18 years old, I sat in a doctor's office and heard three unfamiliar letters: PCOS (polycystic ovary syndrome). I remember feeling equal parts relief (an explanation for my chaos of symptoms) and confusion. The doctor's solution was swift and simple – “Here's birth control, it will regulate your cycle”. Like many women in my shoes, I was quickly put on the pill (a very common first-line treatment for PCOS <a href={`#${sourceIdBmc}`} className={supLinkClass}><sup>1</sup></a>). I dutifully took it, hoping for the best. But instead of feeling "fixed,” I was met with <strong>unpleasant side effects</strong> – mood swings, weight fluctuations, and a sense that my body was no longer my own. My symptoms were muted but not gone, and new issues cropped up courtesy of the medication. It felt like putting a band-aid on a deep wound.
      </p>
      <p>
        I grew frustrated. I had <strong>so many questions</strong>: Why did this happen to me? Is the pill really my only option? Will I deal with this forever? The gynecologist didn't seem to have the time or answers, aside from "come back when you want to get pregnant." Desperate for guidance, I consulted an endocrinologist – someone who finally took a closer look at my hormones. That extra step should have been reassuring, but it highlighted a harsh truth: navigating a hormonal disorder felt like <strong>wandering in the dark with a tiny flashlight</strong>. Each specialist only saw one slice of the issue. I was piecing together fragments of care, on my own, at 18. It was lonely and overwhelming.
      </p>

      <h2>Feeling Alone in a Silent Struggle</h2>
      <p>
        In those early months, I felt utterly alone. None of my friends had even heard of PCOS. My family's understanding was limited to “doctor's orders" – just take the pill. I recall thinking, why does no one talk about this? For a while, I genuinely wondered if I was some rare case. It wasn't until much later, through late-night internet searches and eventually connecting with other women, that I discovered <strong>I was far from alone</strong>. PCOS is shockingly common – it's one of the most frequent hormonal disorders in women, affecting up to <strong>1 in 8 women</strong> <a href={`#${sourceIdNcbi}`} className={supLinkClass}><sup>2</sup></a>. Yet for something so prevalent, it felt like a secret club no one had prepared me to join.
      </p>
      <p>
        As I dug deeper, I learned that my experience – the <strong>confusing diagnosis</strong>, the <strong>feeling of being dismissed</strong>, the <strong>scramble for answers</strong> – is disturbingly common. In one study, 34% of women with PCOS waited over <strong>two years</strong> for a proper diagnosis, and 41% had to see <strong>three or more</strong> doctors before getting answers <a href={`#${sourceIdBmc}`} className={supLinkClass}><sup>3</sup></a>. Can you imagine the frustration? By the time many of us hear "you have PCOS,” we've been on a medical merry-go-round, repeating our painful story to doctor after doctor. And after all that, nearly two-thirds of women are left <strong>dissatisfied with the information</strong> they receive at diagnosis <a href={`#${sourceIdBmc}`} className={supLinkClass}><sup>3</sup></a>. That statistic didn't surprise me – I left my own diagnosis appointment with more questions than answers.
      </p>
      <p>
        Those years of bouncing between providers took a mental toll. I felt anxious and unheard. (Apparently, that's common too – delayed diagnosis and shallow support can worsen anxiety and depression in PCOS patients <a href={`#${sourceIdBmc}`} className={supLinkClass}><sup>4</sup></a>.) I was angry that in an era of instant information, <strong>basic knowledge about my condition was so hard to come by</strong>. I turned to online forums and support groups, hungry for real-life experiences since the pamphlet from my doctor wasn't cutting it. Strangers on the internet had more tips for managing my symptoms than most of my doctors did. It shouldn't be this way.
      </p>

      <h2>The Bigger Picture: Women's Hormonal Health Is Underserved</h2>
      <p>
        My personal journey opened my eyes to a bigger issue: <strong>women's hormonal health is profoundly underserved and under-researched</strong>. It wasn't just about me, or just about PCOS. Everywhere I looked, I saw signs of neglect in women's health. Polycystic ovary syndrome, endometriosis, fibroids, PMDD, thyroid disorders – conditions that can upend a woman's life – are often met with <strong>shrugs, myths, or one-size-fits-all treatments</strong>. We hear things like "just lose weight," "stress less," or "go on birth control," as if that's a cure-all. Meanwhile, the underlying issues remain insufficiently understood.
      </p>
      <p>
        I was stunned to learn how deep the research gap runs. PCOS affects millions (again, roughly 10% of women globally), yet for years it didn't even appear on the U.S. National Institutes of Health's list of prioritized research topics <a href={`#${sourceIdNcbi}`} className={supLinkClass}><sup>2</sup></a>. (Yes, <strong>really</strong> – it was officially recognized by NIH only in 2022!). Even today, PCOS research funding is around a meager <strong>$10 million a year</strong> <a href={`#${sourceIdNcbi}`} className={supLinkClass}><sup>2</sup></a> – peanuts, considering how many people it impacts. To put that in perspective, that's funding for the entire disorder, not a single study. No wonder progress has been slow.
      </p>
      <p>
        It isn't just PCOS. Broadly, women's health research has been <strong>chronically underfunded</strong>. Only about <strong>8.8%</strong> of NIH grants over the past decade focused on women's health at all <a href={`#${sourceIdUcdavis}`} className={supLinkClass}><sup>5</sup></a>. Within that sliver, female-specific conditions like endometriosis, PCOS, and uterine fibroids – which collectively affect tens of millions – get shockingly little attention. A recent analysis highlighted that these conditions "affect millions of women – yet there is still a lack of clear guidance and innovative interventions to manage these conditions." <a href={`#${sourceIdUcdavis}`} className={supLinkClass}><sup>6</sup></a> In other words, women are living with life-disrupting symptoms that medicine still doesn't quite know what to do with.
      </p>
      <p>
        Why? Part of the problem is historical. For a long time, women were simply not included in many clinical trials and studies – our bodies were seen as "too complicated" because of hormonal cycles, or not considered at all. The result is a knowledge gap we are <strong>only now</strong> starting to address. One expert noted that women's health research remains "really undervalued, understudied" by the scientific community <a href={`#${sourceIdNature}`} className={supLinkClass}><sup>7</sup></a>. Diseases that predominantly affect women have tended to receive less funding than those affecting men, even when the overall health burden is similar <a href={`#${sourceIdNature}`} className={supLinkClass}><sup>8</sup></a>. It's a sobering reality: our society has been <strong>more comfortable ignoring women's health issues</strong>, or expecting women to simply cope.
      </p>
      <p>
        Coping, in fact, has been the norm. There's a troubling cultural narrative that painful periods, hormonal mood swings, or symptoms like debilitating fatigue are just things women must endure quietly. I think about the stories I've heard – like women with fibroids who suffer <strong>extremely heavy bleeding and pain</strong> but are expected to carry on with work and life as if nothing's wrong <a href={`#${sourceIdNcbi}`} className={supLinkClass}><sup>9</sup></a>. For far too long, women's pain has been dismissed as exaggeration or "part of being a woman." This attitude not only hurts women in daily life, it trickles up to policy and research priorities. If society isn't alarmed by women's suffering, who's going to funnel money into studying it? The outcome: conditions like PCOS and endometriosis remain under-diagnosed, under-treated, and under-researched.
      </p>
      <p>
        Realizing this sparked something in me. I went from feeling alone in my struggle to feeling <strong>outraged on behalf of all women</strong>. Why were we still so in the dark about conditions that affect our fertility, our mood, our long-term health? Why did getting help feel like fumbling through a labyrinth? This wasn't just my fight – it was a collective fight for all women who have been told their symptoms are "no big deal" or who have been left to <strong>figure it out on their own</strong>.
      </p>

      <h2>Turning Frustration into Mission</h2>
      <p>
        My frustration eventually transformed into a fierce determination. I decided that I didn't want another scared 18-year-old, or a confused 28-year-old, or an exasperated 35-year-old to go through the hormonal health maze alone like I did. If the system wasn't providing the support and answers we needed, then I would <strong>help build a new solution</strong>.
      </p>
      <p>
        That's why I'm building <strong>Knowher</strong>. It's not just an app – it's my personal mission come to life. Knowher is designed to be the resource I wish I had back then: a place of <strong>comfort, knowledge, and community</strong> for women navigating hormonal conditions. The name "Knowher" reflects exactly what I needed years ago – to know her, to understand my own body. I want women to have a tool that empowers them with reliable information about their condition, whether it's PCOS, endometriosis, or another hormonal imbalance, and <strong>guides them</strong> through managing it. Even more importantly, I want it to make them feel genuinely <strong>heard and supported</strong>.
      </p>
      <p>
        I'm intentionally not building Knowher as a cold, clinical database or a glossy, salesy wellness app. I'm building it as a <strong>companion</strong> – something that says, "Hey, I've been there too. Let's figure this out together." Whether it's tracking symptoms to finally draw patterns and get answers, or simply explaining in plain language what the heck terms like “LH hormone” or “insulin resistance" mean, the app is there to hold your hand. It's also a place to connect with others, because there's immense comfort in knowing you're not the only one dealing with unwanted chin hair, mood swings, fertility worries, or whatever curveball our hormones throw at us.
      </p>
      <p>
        I won't lie, building this hasn't been easy. I'm a first-time founder and every day is a learning curve – much like dealing with PCOS was. But every time I hear another woman's story of being dismissed by her doctor, or see a comment online like "I thought it was just me," my resolve hardens. <strong>This is why I'm doing it</strong>. The world of women's health tech (or "femtech") is starting to boom, and for good reason. We're fed up with the status quo. We're creating the solutions we've been waiting for. I feel incredibly passionate (and yes, a bit protective) about this space because it's so personal. It's not just business; it's deeply personal <strong>for me and millions of others</strong>.
      </p>

      <h2>A New Era for Women's Health</h2>
      <p>
        Writing this now, I feel a mix of emotions – a little bit of lingering anger at how women's hormonal health has been ignored, but mostly <strong>hope and excitement</strong> for what's to come. Change is on the horizon. More of us are speaking up about our experiences, more researchers are focusing on female health, and more innovations like Knowher are being built to fill the void. We're finally seeing initiatives to increase funding and attention to women's health research (though we have a long way to go) <a href={`#${sourceIdUcdavis}`} className={supLinkClass}><sup>5</sup></a>. The silence and stigma around these conditions is gradually breaking.
      </p>
      <p>
        I truly believe we're at the start of a new era where women won't have to accept feeling miserable or bewildered by their own bodies. In this era, a teenager getting a PCOS diagnosis might also get handed a supportive app and community, not just a prescription and a shrug. In this era, a woman experiencing crazy mood swings or unexplained symptoms won't be told she's "imagining things" – she'll have the data and the support to back her up.
      </p>
      <p>
        Every time I pour my heart into Knowher – every late night spent refining features, every conversation with a fellow "cyster" (as women with PCOS playfully call each other) – I circle back to that younger version of me. I think of 18-year-old me crying in frustration because she didn't <strong>know</strong> her own body or what was happening to it. Building this is my way of reaching back in time to give her a hug and say, "It's okay. You're going to take charge of this, and you'll help others do the same."
      </p>

      <h3>Why am I building Knowher?</h3>
      <p>
        Because women deserve better. Because hormonal health conditions might be a part of our lives, but they shouldn't control our lives or fill us with fear. Because no one facing these issues should feel alone or in the dark, ever again. I'm building Knowher to <strong>shine a light for anyone lost in that dark maze of hormonal health</strong> – so that each of us can finally know her and own her health journey with confidence and hope.
      </p>

      <div className="mt-12 pt-8 border-t border-slate-700">
        <h3 className="font-bold text-white">Sources:</h3>
        <ul className="text-sm !mt-4 space-y-2 list-none !pl-0">
          <li id={sourceIdBmc}>
            <span className="font-semibold text-slate-300">1, 3, 4:</span> "I felt like she didn't take me seriously": a multi-methods study examining patient satisfaction and experiences with polycystic ovary syndrome (PCOS) in Canada | BMC Women's Health | Full Text. <a href="https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-022-01630-3" target="_blank" rel="noopener noreferrer">https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-022-01630-3</a>.
          </li>
          <li id={sourceIdNcbi}>
            <span className="font-semibold text-slate-300">2, 9:</span> Overview of Research Gaps for Selected Conditions in Women's Health Research at the National Institutes of Health - NCBI Bookshelf. <a href="https://www.ncbi.nlm.nih.gov/books/NBK606165/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/books/NBK606165/</a>.
          </li>
           <li id={sourceIdUcdavis}>
            <span className="font-semibold text-slate-300">5, 6:</span> New report highlights ways to advance women's health research. <a href="https://health.ucdavis.edu/news/headlines/new-report-highlights-ways-to-advance-womens-health-research/2024/12" target="_blank" rel="noopener noreferrer">https://health.ucdavis.edu/news/headlines/new-report-highlights-ways-to-advance-womens-health-research/2024/12</a>.
          </li>
          <li id={sourceIdNature}>
            <span className="font-semibold text-slate-300">7, 8:</span> Women's health research lacks funding - these charts show how. <a href="https://www.nature.com/immersive/d41586-023-01475-2/index.html" target="_blank" rel="noopener noreferrer">https://www.nature.com/immersive/d41586-023-01475-2/index.html</a>.
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhyImBuildingKnowherContent;
