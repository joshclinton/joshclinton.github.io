/* =========================================================================
   Publications data — single source of truth for the Research section.

   Authoritative source: josh.clinton.cv.publications.pdf (the CV).
   Titles, authors, years, venues, and DOIs follow the CV exactly.
   PDF links point to a local copy in assets/papers/ where one exists; entries
   with no local PDF still appear (with a DOI link if the CV gives one), so the
   list is a complete record that matches the CV.

   Abstracts are filled where a PDF was available to read; a few entries have
   no abstract yet (flagged by omission).

   Topic tags are a first-pass draft for review. Topic set (from the brief):
   polling, elections, public opinion, Congress, methodology, data science.

   TODO: add author PDFs (currently DOI-only) when available:
     - More a Molehill than a Mountain (2011)
     - Congress, Lawmaking, and the Fair Labor Standards Act (2012)
     - Separated Powers in the United States (2012)
     - The Effect of Majority Party Agenda Setting on Roll Calls (2020)
     - Reluctant Republicans? (2022)
     - Protecting the Integrity of Survey Research (2023)
   ========================================================================= */

const TOPIC_ORDER = ["polling", "elections", "public opinion", "Congress", "methodology", "data science"];

const PUBLICATIONS = [
  /* ===================== WORKING & UNPUBLISHED PAPERS ===================== */
  /* type "working" = active; type "unpublished" = finished, not in a journal.
     Both need a link (PDF or preprint). award = a prize; note = a short story. */
  {
    title: "Artificial Intelligence and the Future of Public Opinion Research",
    authors: "D. Sunshine Hillygus, David M. Rothschild, Joshua D. Clinton, Soubhik Barari, Trent D. Buskirk, Frauke Kreuter, Jenny Marlar, Steve Rathje, Aaron Shaw",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Forthcoming, Nature",
    topics: ["public opinion", "polling", "data science"],
    abstract: "Artificial intelligence (AI) is rapidly transforming survey research, the primary means of measuring public opinion. In this Perspective, we shift attention from broad claims about the promise or peril of AI to the conditions under which it strengthens or compromises public opinion research. We argue that standards for transparency and disclosure are essential for the responsible integration of AI into survey research.",
    links: {}
  },
  {
    title: "Challenges in Public Opinion Research",
    authors: "Joshua D. Clinton",
    venue: "", year: 2027, type: "working", featured: false,
    status: "Forthcoming, Annual Review of Political Science",
    topics: ["public opinion", "polling", "data science"],
    abstract: "The study of public opinion has always confronted a fundamental problem of representation: how to characterize the opinions of a diverse public using survey responses from the relatively few people who decide to participate. Researchers have long relied on statistical adjustments and models to compensate for incomplete or unrepresentative human signals, but artificial intelligence (AI) changes this tension by greatly expanding the role that models can have in the collection, analysis, and generation of public opinion data. AI can deepen what researchers learn from human responses by making respondents’ own words analytically tractable at scale or through adaptive interviewing while also offering the possibility of replacing (missing) human responses and respondents with model-generated ones. AI presents the study of public opinion with a paradox: a technology that may allow us to better measure opinions also makes it harder to know what we are measuring. Can we study public opinion without either the public or actual opinion?",
    links: { pdf: "assets/papers/C_ARPS2027.pdf" }
  },
  {
    title: "AI Pandering: Constructing Diverging Political Realities through Conversation",
    authors: "James Bisbee, Joshua D. Clinton, Jennifer M. Larson, Diana Da In Lee",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Revise and resubmit, Nature Communications",
    topics: ["data science", "public opinion", "methodology"],
    abstract: "As conversational AI increasingly replaces traditional search for information seeking, concerns arise about how engagement-optimized chatbots shape the neutrality and consistency of the information users receive. Unlike conventional search engines, chatbots generate responses in real time and adapt to prior conversational turns. This dynamic interaction creates the possibility that chatbots tailor information to users' inferred beliefs. We audit two leading systems, ChatGPT and Grok, to test whether chatbots present systematically different political realities to users with distinct inferred ideologies. Using large language model–powered confederates that adopt varied political personas without explicitly stating their ideology, we conduct multi-turn conversations about immigration, election integrity, and vaccine safety. We find consistent evidence of ideological pandering in which chatbots adapt their epistemic posture—agreement, validation, and confidence in factual claims—to inferred user ideology. In particular, chatbots recommend distinct, ideologically segregated news sources to liberal and conservative personas, converge toward endorsing users' initial viewpoints in 60–90% of conversations, and express differing levels of confidence in identical factual claims depending on inferred ideology. Pandering is strongest among ideologically extreme and confrontational personas and emerges rapidly within conversations. In an especially troubling pattern, chatbot responses escalate to encouraging real-world action aligned with users' expressed views. Together, our findings suggest that conversational AI can generate personalized versions of political reality, reinforcing epistemic fragmentation in an already polarized environment.",
    links: { pdf: "assets/papers/BCLL_AIPandering.pdf", doi: "https://preprints.apsanet.org/engage/apsa/article-details/69a746f6810b9dcc82e0c5b0" }
  },
  {
    title: "Confidence in Higher Education",
    authors: "Joshua D. Clinton, John Sides",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Presented at the 2026 Annual Meeting of the American Political Science Association",
    topics: ["public opinion"],
    abstract: "A range of scholarship and public polls have documented declining faith in higher education. We explore the origins of this trend. Drawing on five decades of survey data, we show that confidence in higher education has declined for over twenty years, but remains higher than confidence in most other institutions. But Democrats and Republicans have become more divided on higher education than nearly any other institution. The growing partisan gap is almost entirely due to weakening support among Republicans. We show that this is not the result of the changing educational composition of the party coalitions. It appears mostly because of attitude change among partisans. We discuss the implications of this long-term partisan polarization for current proposals to reform higher education, many of which do not grapple with the challenges that this partisan polarization poses.",
    links: {}
  },
  {
    title: "AI-Mediated Scholarly Production and Epistemic Collapse in Political Science",
    authors: "James Bisbee, Joshua D. Clinton",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Working paper",
    topics: ["data science", "methodology"],
    abstract: "Can recursive AI-mediated research proposals narrow the intellectual environment from which future scholarship is produced? Titles and abstracts matter because conferences can select participants on the basis of proposals rather than finished papers, making proposal generation a consequential stage of scholarly agenda formation. We develop an argument about scientific renewal: unusual hypotheses, minority frameworks, and atypical combinations of prior work may disappear when increasingly AI-generated scholarship becomes the input to subsequent production. The mechanism operates through the literature presented to a fixed model, without recursive retraining. We propose a controlled experiment anchored in a verified corpus of American National Election Studies scholarship, comparing replacement of prior literature, accumulation alongside human work, and periodic human injection. A common structured representation will support measures of semantic diversity, citation-combination novelty, and variation in hypotheses and research designs. The broader institutional question is how scholarly systems can retain their capacity for renewal as production and evaluation become increasingly automated.",
    links: {}
  },
  {
    title: "Inferring Donor Motivations from Portfolio Choice: The Importance of Electoral and Ideological Motivations for Individual General Election Donors, 1998–2022",
    authors: "Joshua D. Clinton, Seth J. Hill, Gregory A. Huber, Mackenzie Lockhart",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Working paper",
    topics: ["elections"],
    abstract: "Individual donors fund an increasing majority of House campaigns. Some observers suggest that donors are primarily ideologues whose contributions to extreme candidates polarize politics. Others argue electoral considerations primarily determine the recipients of donor support. We offer a comprehensive analysis of individual-level donation behavior using contribution records to general election U.S. House candidates from 1998 to 2022 to characterize their revealed preferences based on the <em>portfolio</em> of candidates they support within and across elections. Approximately 47% of donors give primarily to candidates in closely-contested races while around 20% give primarily to candidates of similar political ideologies. Across election cycles most repeat donors do not support the same candidates each time they have the opportunity but are 6 to 9 percentage points more likely to give again to a candidate who runs in a swing rather than a safe district. Although donor behavior is diverse and resists simple classification, the concentration of giving to competitive races and the tendency of donors to follow candidate electoral prospects across cycles suggest that advancing partisan electoral success is more important to individual donors than supporting ideologically similar candidates.",
    links: {}
  },
  {
    title: "Prediction Markets? The Accuracy and Efficiency of Political Prediction Markets in the 2024 Presidential Election",
    authors: "Joshua D. Clinton, TzuFeng Huang",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Working paper",
    topics: ["elections", "polling", "data science"],
    abstract: "Nearly 2,200 political prediction markets involving more than $3.2 billion in platform-reported trading volume (Confino, 2024) were traded across the Iowa Electronic Markets, Kalshi, PredictIt, and Polymarket during the final nine weeks of the 2024 U.S. presidential campaign. Overall, 86% of these actively traded political markets performed better than a coin-flip, and they were also generally well-calibrated. Even so, there was modest evidence of longshot bias, and the impressive topline accuracy partly reflects the composition of the contracts being traded. 66% of all markets were priced below $0.20 or above $0.80 on the eve of Election Day, and 96% of those contracts resolved as priced. Among markets priced between $0.40 and $0.60 (12% of the sample), 55% resolved in favor of the priced favorite. Market efficiency was more mixed. Prices involving related political events generally covaried, but daily price changes were considerably less synchronized than price levels — suggesting that short-run movements were often market-specific. Arbitrage opportunities in presidential winner-take-all markets were also present on nearly every day. The prices of political prediction markets may provide useful signals about expected outcomes overall, but aggregate evidence of past accuracy and calibration neither guarantees future market performance nor implies that the price of any particular contract provides a definitive or fully efficient assessment of political reality.",
    links: { doi: "https://osf.io/preprints/socarx/d5yx2_v5" }
  },
  {
    title: "Design, Inference, and the Strategic Logic of Suicide Terrorism: A Rejoinder",
    authors: "Joshua D. Clinton, Scott Ashworth, Adam Meirowitz, Kristopher W. Ramsay",
    venue: "", year: 2008, type: "unpublished", featured: false,
    status: "2008",
    topics: ["methodology"],
    note: "Our last word in the published APSR exchange with Robert Pape over the suicide-terrorism data.",
    abstract: "A rejoinder to <a href='https://doi.org/10.1017/s0003055408080179' target='_blank'>Robert Pape’s reply</a> defending his suicide-terrorism analysis. His response sidesteps the core problem we identified, that looking only at instances of suicide terror cannot support his conclusions about occupation and democracy.",
    links: { pdf: "assets/papers/ACMRResponse.pdf" }
  },
  {
    title: "An Independent Judiciary? Congressional and Presidential Preferences and the Supreme Court’s Interpretation of Federal Statutes, 1953–1995",
    authors: "Joshua D. Clinton",
    venue: "", year: 1998, type: "unpublished", featured: false,
    status: "Stanford, 1998",
    topics: ["Congress", "methodology"],
    award: "Winner, 1999 Congressional Quarterly Press Award for the best graduate paper in Law and Courts.",
    note: "My second-year graduate paper.",
    abstract: "I test the implications of the two main theories of judicial decision making (i.e., the Separation of Powers Model and the Attitudinal Model) by examining the extent to which the Court responds to elected bodies’ preferences in its interpretation of federal statutes from 1953-1995. I do so by deriving the models within a game-theoretic framework that precisely identifies the models’ predictions, and by developing a method that recovers comparable preferences between the Court and the elected bodies. Even allowing for alternative measurement choices, the paper finds scant evidence supporting the predictions of the Separation of Powers Model.",
    links: { pdf: "assets/papers/C_WP1998.pdf" }
  },
  {
    title: "Panel Bias from Attrition and Conditioning: A Case Study of the Knowledge Networks Panel",
    authors: "Joshua D. Clinton",
    venue: "", year: 2001, type: "unpublished", featured: false,
    status: "Stanford, 2001",
    topics: ["polling", "methodology"],
    award: "Winner, 2001 AAPOR Graduate Student Paper Award.",
    note: "Written while I was an intern at InterSurvey (then Knowledge Networks) during graduate school, and an early sign of the survey-methods work to come.",
    abstract: "With the recent rise of Internet based public opinion studies, panel studies have been utilized with much more frequency. Although the benefits of panel methods are well known (e.g., Sharot 1991), using a panel risks bias in two ways. First, since panels rely on re-interviewing panelists, systematic panel attrition can produce a panel that is unrepresentative of the target population. Second, interviewing and re-interviewing panelists may change the opinions/behaviors of the panelists – creating unrepresentative panelists. To investigate the prevalence and impact of these possible biases, I investigate a panel that is particularly suspect to these sources of bias – the panel of Knowledge Networks. Knowledge Networks’ panelists are not only given an interactive TV appliance and Internet access, but they are also surveyed weekly. In this paper I both examine the extent (and effect) of panel attrition in Knowledge Networks’s panel over a 7 month period, as well as report the results of an experiment designed to isolate the possible opinion/behavior changes introduced by panel participation. I find little evidence of either type of bias in the Knowledge Networks panel.",
    links: { pdf: "assets/papers/C_WP2001.pdf" }
  },
  {
    title: "Strategically Speaking: A New Analysis of Presidents Going Public",
    authors: "Joshua D. Clinton, David E. Lewis, Stephanie K. Riegg, Barry R. Weingast",
    venue: "", year: 1999, type: "unpublished", featured: false,
    status: "1999",
    topics: ["public opinion", "Congress"],
    note: "Possibly the only paper Barry Weingast never published. It earned a revise-and-resubmit at the Journal of Politics that we did not think we could convert.",
    abstract: "A new approach to studying the presidency has recently emerged from the formal theory of American politics that is being applied to a variety of presidential activities including vetoes, unilateral action, and appointments. We use the phenomenon of presidential public activities to illustrate the contribution of this new approach for our understanding of the presidency. We argue that it is a mistake to undertake an analysis of presidential activities like public speeches without considering both the political environment – specifically the preferences of important congressional actors – and the policy change being pursued (i.e., the location of the status quo policy). Abstracting away from the idiosyncratic features of individual presidents and embedding presidential public activity in the larger separation of powers system illuminates three different logics undergirding public activity, namely changing legislator preferences, claiming credit for the passage of legislation, and making veto threats credible. Examining presidential activity without accounting for the different possible motivations for going public or the fact that presidents are a single actor in the policymaking process operating under both institutional and political constraints risks overestimating presidential influence. We conclude that the new approach to the study of the presidency can illuminate important theoretical insights and improve empirical analysis.",
    links: { pdf: "assets/papers/CLRW_WP1999.pdf" }
  },
  {
    title: "Characterizing Chief Executives: Comparing Presidential and Congressional Preferences and Their Effect on Lawmaking, Agency Budgeting, and Unilateral Executive Action, 1874–2010",
    authors: "Joshua D. Clinton, Molly C. Jackman, Saul P. Jackman",
    venue: "", year: 2013, type: "unpublished", featured: false,
    status: "2013",
    topics: ["Congress", "methodology"],
    award: "Winner, 2014 Patrick J. Fett Award for the best paper on Congress and the Presidency at the 2013 MPSA.",
    abstract: "Investigating executive and legislative interactions is critical for understanding presidential systems. Doing so requires comparing the preferences of the elites involved, which is challenging because these actors do not take positions on the same issues and are motivated by different strategic considerations. To circumvent these difficulties, we propose a new measure of the president’s ideal point based on vote returns and an assumption about the electoral connection. We illustrate the generalizability of this approach by estimating the preferences of U.S. presidents (and their challengers) from 1874-2010 and California governors from 1994-2010. Additionally, we use our new measure to test the effect of executive-legislative congruence on: legislative productivity (1877-1996), agency budgeting (1933-2006), and the issuance of executive orders (1945-2001). These examples demonstrate the content validity of our measure, as well as how it can be used to refine our substantive understanding of inter-branch relations.",
    links: { pdf: "assets/papers/CJJ_WP2013.pdf" }
  },
  {
    title: "Oversight, Accountability, and Constituency Ignorance",
    authors: "Joshua D. Clinton, Jeff Tessin",
    venue: "", year: 2008, type: "unpublished", featured: false,
    status: "2008",
    topics: ["Congress", "public opinion"],
    abstract: "Low levels of constituent knowledge about roll call voting cause some to question the prospects for Congressional accountability. Others suggest that challengers, interest groups, and other third parties educate constituents about disagreements and reduce the need for active monitoring. This paper examines the prospects for such indirect oversight using an original survey of nearly 13,000 respondents. Contrary to accounts of indirect oversight, we find that disagreement between representatives and their constituents has only a small effect on constituent knowledge about prominent votes in the House of Representatives involving the impeachment charges against President Clinton and the granting of Permanent Normal Trade Relations (PNTR) to China. We also find no evidence that high-quality candidates are more likely to challenge unresponsive incumbents, or that outside actors publicize highly unresponsive votes in campaign advertising. Despite frequent appeals to the possibility of “fire alarm” oversight, we find little evidence of its presence.",
    links: { pdf: "assets/papers/CT_WP2008.pdf" }
  },
  {
    title: "Empirical Probability Scales for Verbal Expectations Data, with Application to Expectations of Job Loss",
    authors: "Joshua D. Clinton, Charles F. Manski",
    venue: "", year: 2002, type: "unpublished", featured: false,
    status: "2002",
    topics: ["methodology", "public opinion"],
    note: "An early collaboration with the econometrician Charles Manski on measuring subjective expectations.",
    abstract: "Survey researchers have long used verbal expressions of likelihood to elicit the expectations that respondents hold for future events. The General Social Survey (GSS) uses this question to elicit expectations of job loss: “Thinking about the next twelve months, how likely do you think it is that you will lose your job or be laid off - very likely, fairly likely, not too likely, or not at all likely?” Recently, surveys have elicited expectations in the form of numerical probabilities. The Survey of Economic Expectations (SEE) asks: “What do you think is the percent chance that you will lose your job during the next 12 months?” Whereas verbal questions at most convey ordinal information on expectations, probabilistic questions measure expectations on a well-defined absolute scale. This paper shows that auxiliary data collection can enable probabilistic re-scaling of verbal expectations data and thereby enhance the value of such data. The idea is to pose corresponding verbal and probabilistic questions to a suitable sample of respondents. The responses may be used to learn the frequency distributions of subjective probabilities reported by persons who give different verbal answers. These frequency distributions may then be used to predict the probability responses of respondents to surveys that now collect only verbal expectations data. Applying the prediction process, we have administered the GSS and SEE questions on job loss to a national sample of Knowledge Networks (KN) panelists. The KN data enable us to impute the probabilistic job-loss expectations that GSS respondents would have reported had they been asked. We report the findings.",
    links: { pdf: "assets/papers/CM_WP2002.pdf" }
  },

  /* ===================== REFEREED ARTICLES ===================== */
  {
    title: "Improving Small-Area Estimates of Public Opinion by Calibrating to Known Population Quantities",
    authors: "Joshua D. Clinton, Will Marble",
    venue: "Political Analysis", year: 2026, type: "article", featured: true,
    topics: ["methodology", "public opinion", "data science"],
    abstract: "Multilevel regression and poststratification (MRP) is widely used to estimate opinion in small subgroups and to adjust unrepresentative surveys. Yet, even flexible MRP models contain errors generated by non-response and model misspecification. We propose a principled, data-driven method to leverage observable errors on auxiliary quantities with known marginal distributions—for example, election outcomes—to improve estimates of policy attitudes. Our method leverages the correlation between auxiliary variables and outcomes of interest to calibrate MRP estimates to these known marginal distributions. We illustrate our approach using a pre-election poll measuring support for an abortion referendum. We find that the method reduces county-level error by nearly two-thirds relative to traditional MRP. We also show how our calibration approach can be used to generate estimates for smaller nested geographies, such as precincts, even in the absence of poststratification data at this level. Our approach provides a framework for fully incorporating known population data to improve estimates of public opinion in small subgroups, providing scholars another tool to study representation.",
    links: { pdf: "assets/papers/MC_MRPCalibration.pdf", doi: "https://doi.org/10.1017/pan.2026.10044" }
  },
  {
    title: "Procedural Polarization: How Election Rules Shape Voters’ Confidence",
    authors: "Joshua D. Clinton",
    venue: "American Political Science Review", year: 2026, type: "article", featured: true,
    topics: ["elections", "public opinion"],
    abstract: "Prior research demonstrates voters’ confidence in elections depends on whether their preferred candidate wins, but does agreement with the electoral rules being used also matter? Leveraging growing procedural polarization in election laws, public opinion data from 2008 to 2024, and a large-scale survey experiment conducted before the 2024 election, I show that agreement with election procedures matters for voter confidence beyond well-established effects related to partisan control and electoral outcomes. Observational and experimental analyses consistently reveal that voters are less likely to express confidence in election results conducted using procedures they oppose. The effects are particularly large for voter identification laws and among Republicans and independents. The findings underscore a tension in American federalism: as states increasingly adopt divergent electoral rules aligned with co-partisan preferences, partisan divides in electoral confidence may deepen. If so, procedural responsiveness to partisan preferences may undermine electoral confidence and, in turn, perceptions of electoral legitimacy.",
    links: { pdf: "assets/papers/C_APSR2026.pdf", doi: "https://doi.org/10.1017/S000305542610166X" }
  },
  {
    title: "Contingent Confidence: The Effect of the 2024 Election Outcome on Public and Elite Confidence in National Elections",
    authors: "Joshua D. Clinton",
    venue: "PS: Political Science & Politics", year: 2026, type: "article", featured: false,
    topics: ["elections", "public opinion", "polling"],
    abstract: "Using a rolling cross-section survey of 54,000 voters conducted between mid-October and mid-December, a panel survey of 6,000 voters interviewed in both October and December, and surveys of 1,400 local political elites and officials conducted in both October and December, this study characterizes how confidence in the accuracy of national elections changed with the projected election of President Trump on Election Day. Among voters, Republican confidence immediately increased by 31 percentage points (123% change) and Democrats’ confidence declined by 12 percentage points (16% change) such that the confidence among partisan voters was almost identical by mid-December. The most polarized partisans exhibited the largest confidence changes. Among local political elites, the increase in Republicans’ confidence mirrored the increase among Republican voters (106% change), but the confidence among Democratic political elites remained high throughout. These findings highlight troubling concerns for sustaining a shared confidence in the accuracy and legitimacy of future elections.",
    links: { pdf: "assets/papers/C_PS2026.pdf", doi: "https://doi.org/10.1017/S1049096525101662" }
  },
  {
    title: "Donors and Dollars: Comparing the Policy Views of Donors and the Affluent",
    authors: "Joshua D. Clinton, Michael Barber, Brandice Canes-Wrone, Gregory A. Huber",
    venue: "Journal of Politics", year: 2026, type: "article", featured: false,
    topics: ["elections", "public opinion"],
    abstract: "Are campaign donors simply affluent people who happen to give to campaigns, or do donors and the affluent differ in their policy views? The answer to this question shapes our understanding of the impact of money in politics and economic inequality more broadly. To answer this question, we conducted surveys of verified 2017-2018 donors, affluent individuals, and the general population. Comparing the preferences of copartisans reveals both parties’ donors have more ideologically extreme views on domestic policies than either the affluent or general public. On international issues, however, Democratic donors are more pro-internationalist than affluent and general public copartisans while Republican donors are similar to affluent copartisans. These differences are not attributable to demographic composition or level of political interest across the groups. Analyzing variation among donor-types, we find some types are indeed more likely to hold extreme views than others, but differences from the affluent persist regardless of whether the contributor gave to an out-of-state congressional race, donated a small amount, or recently gave to a presidential candidate.",
    links: { pdf: "assets/papers/BCWCH_JOP2026.pdf", doi: "https://doi.org/10.1086/736337" }
  },
  {
    title: "Which Republican Constituencies Support Restrictive Abortion Laws? Comparisons among Donors, Wealthy, and Mass Publics",
    authors: "Joshua D. Clinton, Michael Barber, Brandice Canes-Wrone, Gregory A. Huber",
    venue: "Public Opinion Quarterly", year: 2025, type: "article", featured: false,
    topics: ["public opinion", "elections"],
    abstract: "Roe vs. Wade (1973) recognized a constitutional right to abortion under various circumstances and, in doing so, facilitated a political environment in which politicians could endorse more restrictive abortion policies that Roe prohibited. Indeed, many states enacted “trigger” laws that would only carry the force of law if Roe were overturned. The Supreme Court in Dobbs vs. Jackson (2022) removed the constitutional right to abortion, ending a situation in which this type of position taking lacked policy consequences and creating an environment in Republican-led states where many policies seemingly contrast with public opinion. To investigate potential sources of support for a variety of types of restrictions, we analyze an original survey of over 7,500 verified donors, 1,500 affluent individuals, and 1,000 members of the general public conducted in 2019–2020. The most extreme restrictions, such as bans with no rape exception, are not popular with Republicans in the aggregate from any of the three groups—Republican donors, affluent individuals, or voters—but they are supported by the small and potentially influential group of highly religious Republicans who report that abortion is one of their most important issues.",
    links: { pdf: "assets/papers/BCCWH_POQ.pdf", doi: "https://doi.org/10.1093/poq/nfaf012" }
  },
  {
    title: "Synthetic Replacements for Human Survey Data? The Perils of Large Language Models",
    authors: "Joshua D. Clinton, Jim Bisbee, Cassy Dorff, Brenton Kenkel, Jennifer Larson",
    venue: "Political Analysis", year: 2024, type: "article", featured: true,
    topics: ["methodology", "data science", "public opinion"],
    abstract: "Large language models (LLMs) offer new research possibilities for social scientists, but their potential as “synthetic data” is still largely unknown. In this paper, we investigate how accurately the popular LLM ChatGPT can recover public opinion, prompting the LLM to adopt different “personas” and then provide feeling thermometer scores for 11 sociopolitical groups. The average scores generated by ChatGPT correspond closely to the averages in our baseline survey, the 2016–2020 American National Election Study (ANES). Nevertheless, sampling by ChatGPT is not reliable for statistical inference: there is less variation in responses than in the real surveys, and regression coefficients often differ significantly from equivalent estimates obtained using ANES data. We also document how the distribution of synthetic responses varies with minor changes in prompt wording, and we show how the same prompt yields significantly different results over a 3-month period. Altogether, our findings raise serious concerns about the quality, reliability, and reproducibility of synthetic survey data generated by LLMs.",
    links: { pdf: "assets/papers/BCDKL_PA2024.pdf", doi: "https://doi.org/10.1017/pan.2024.5" }
  },
  {
    title: "Giving to the Extreme? Experimental Evidence on Donor Response to Candidate and District Characteristics",
    authors: "Joshua D. Clinton, Mellissa Meisels, Gregory A. Huber",
    venue: "British Journal of Political Science", year: 2024, type: "article", featured: false,
    topics: ["elections", "public opinion"],
    abstract: "How does candidate ideology affect donors' contribution decisions in U.S. House elections? Studies of donor motivations have struggled with confounding of candidate, donor, and district characteristics in observational data and the difficulty of assessing trade-offs in surveys. We investigate how these factors affect contribution decisions using experimental vignettes administered to 7,000 verified midterm donors. While ideological congruence influences donors' likelihood of contributing to a candidate, district competitiveness and opponent extremity are equally important. Moreover, the response to ideology is asymmetric and heterogeneous: donors penalize more moderate candidates five times more heavily than more extreme candidates, with the most extreme donors exhibiting the greatest preference for candidates even more extreme than themselves. Republicans also exhibit a greater relative preference for extremism than Democrats, although partisan differences are smaller than differences by donor extremism. Our findings suggest that strategic considerations matter, and donors incentivize candidate extremism even more than previously thought.",
    links: { pdf: "assets/papers/MCH_BJPS2024.pdf", doi: "https://doi.org/10.1017/s0007123423000650" }
  },
  {
    title: "Protecting the Integrity of Survey Research",
    authors: "Joshua D. Clinton, Kathleen Hall Jamieson, Arthur Lupia, et al.",
    venue: "PNAS Nexus", year: 2023, type: "article", featured: false,
    topics: ["polling", "methodology"],
    abstract: "Although polling is not irredeemably broken, changes in technology and society create challenges that, if not addressed well, can threaten the quality of election polls and other important surveys on topics such as the economy. This essay describes some of these challenges and recommends remediations to protect the integrity of all kinds of survey research, including election polls. These 12 recommendations specify ways that survey researchers, and those who use polls and other public-oriented surveys, can increase the accuracy and trustworthiness of their data and analyses. Many of these recommendations align practice with the scientific norms of transparency, clarity, and self-correction. The transparency recommendations focus on improving disclosure of factors that affect the nature and quality of survey data. The clarity recommendations call for more precise use of terms such as “representative sample” and clear description of survey attributes that can affect accuracy. The recommendation about correcting the record urges the creation of a publicly available, professionally curated archive of identified technical problems and their remedies. The paper also calls for development of better benchmarks and for additional research on the effects of panel conditioning. Finally, the authors suggest ways to help people who want to use or learn from survey research understand the strengths and limitations of surveys and distinguish legitimate and problematic uses of these methods.",
    links: { doi: "https://doi.org/10.1093/pnasnexus/pgad049" }
  },
  {
    title: "Reluctant Republicans, Eager Democrats?",
    authors: "Joshua D. Clinton, John S. Lapinski, Marc J. Trussler",
    venue: "Public Opinion Quarterly", year: 2022, type: "article", featured: false,
    topics: ["polling", "elections"],
    abstract: "Using the registration-based samples and disposition codes of state-level pre-election telephone polls conducted by the National Election Pool as part of the National Exit Poll in 12 states, we test whether likely Democrats were more likely to cooperate with the National Exit Poll than likely Republicans and independents. Using information about both respondents and nonrespondents, we find that Democrats are more likely to cooperate with telephone interviewers than Republicans and independents by 3 and 6 percentage points, respectively, even after controlling for individual and geographic features plausibly related to nonresponse (e.g., age, gender, race, urban/rural, community support for President Trump, and effects of COVID-19). Equalizing the partisan cooperation rate when post-stratifying to account for the partisan differences in cooperation decreases the average polling error on the margin of victory by 4 percentage points in the polls we examine, but sizable errors remain in critical swing states because of within-party differences in who responds and/or errors in the available partisanship measures in the voter file.",
    links: { doi: "https://doi.org/10.1093/poq/nfac011" }
  },
  {
    title: "Trumped by Trump? Public Support for Mail Voting in Response to the COVID-19 Pandemic",
    authors: "Joshua D. Clinton, John S. Lapinski, Sarah Lentz, Stephen Pettigrew",
    venue: "Election Law Journal", year: 2022, type: "article", featured: false,
    topics: ["elections", "public opinion"],
    abstract: "How much is support for vote by mail (VBM) impacted by partisan considerations and personal considerations related to the COVID-19 pandemic? Using surveys of registered voters conducted in April and May 2020 designed to assess the support for various electoral reforms, we show that the overall support for expanding VBM in April 2020 falls sharply after just six weeks because Republicans became less worried about catching COVID-19, and unconcerned Republicans became far more opposed to VBM. These differences not only persisted, but actually increased even further between May and Election Day according to a survey done using a different methodology in November 2020. Public support for other reforms that were intended to make voting easier were largely unchanged, however. The pattern of opinion changes we document—perhaps a result of the intense partisan messaging that occurred during the time period of our study—highlights the importance of partisanship and personal considerations for public support for election reforms and also the widespread public support for most proposed reforms.",
    links: { pdf: "assets/papers/CLLP_COVIDVBM.pdf", doi: "https://doi.org/10.1089/elj.2020.0671" }
  },
  {
    title: "Partisan Pandemic: How Partisanship and Public Health Concerns Affect Individuals’ Social Mobility During COVID-19",
    authors: "Joshua D. Clinton, Jon Cohen, John S. Lapinski, Marc J. Trussler",
    venue: "Science Advances", year: 2020, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "Rampant partisanship in the United States may be the largest obstacle to the reduced social mobility most experts see as critical to limiting the spread of the COVID-19 pandemic. Analyzing a total of just over 1.1 million responses collected daily between 4 April and 10 September reveals not only that partisanship is more important than public health concerns for explaining individuals' willingness to stay at home and reduce social mobility but also that the effect of partisanship has grown over time—especially among Republicans. All else equal, the relative importance of partisanship for the increasing (un)willingness of Republicans to stay at home highlights the challenge that politics poses for public health.",
    links: { pdf: "assets/papers/CCLT_PIDCOVID_PREPRINT.pdf", doi: "https://doi.org/10.1126/sciadv.abd7204" }
  },
  {
    title: "The Effect of Big-City News on Rural America During the COVID-19 Pandemic",
    authors: "Joshua D. Clinton, Eunji Kim, Michael E. Shepherd",
    venue: "Proceedings of the National Academy of Sciences", year: 2020, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "Can “urban-centric” local television news coverage of the COVID-19 pandemic affect the behavior of rural residents with lived experiences so different from their “local” news coverage? Leveraging quasi-random geographic variation in media markets for 771 matched rural counties, we show that rural residents are more likely to practice social distancing if they live in a media market that is more impacted by COVID-19. Individual-level survey responses from residents of these counties confirm county-level behavioral differences and help attribute the differences we identify to differences in local television news coverage—self-reported differences only exist among respondents who prefer watching local news, and there are no differences in media usage or consumption across media markets. Although important for showing the ability of local television news to affect behavior despite urban-rural differences, the media-related effects we identify are at most half the size of the differences related to partisan differences.",
    links: { pdf: "assets/papers/KSC_PNAS_Market Matters_Manuscript.pdf", doi: "https://doi.org/10.1073/pnas.2009384117" }
  },
  {
    title: "The Politics of Locating Polling Places: Race and Partisanship in North Carolina Election Administration, 2008–2016",
    authors: "Joshua D. Clinton, Adriane Fresh, Nick Eubank, Michael E. Shepherd",
    venue: "Election Law Journal", year: 2020, type: "article", featured: false,
    topics: ["elections"],
    abstract: "Do local election administrators change precincts and Election Day polling place locations to target voters based on their partisanship or race? We systematically evaluate whether decisions consistent with targeting occur using the near universe of eligible voters, polling place locations, and precinct boundaries across three presidential elections in the closely contested state of North Carolina. We find no evidence that local administrators allocate precincts and polling places in a manner consistent with partisan manipulation for electoral gain. Some counties appear to differentially target opposition party voters with these changes, but the county-level variation we document is likely due to random variation rather than deliberate manipulation. There is also little evidence that the removal of minority voter protections in Shelby County v. Holder impacted polling place placement. If partisan-motivated precinct or polling place decisions occur in North Carolina, they are seemingly more idiosyncratic than pervasive.",
    links: { pdf: "assets/papers/SFEC_ELJ_PoliticsOfPollingPlaces.pdf", doi: "https://doi.org/10.1089/elj.2019.0602" }
  },
  {
    title: "Polling Place Changes and Political Participation: Evidence from North Carolina Presidential Elections, 2008–2016",
    authors: "Joshua D. Clinton, Adriane Fresh, Nick Eubank, Michael E. Shepherd",
    venue: "Political Science Research & Methods", year: 2020, type: "article", featured: false,
    topics: ["elections"],
    abstract: "How do changes in Election Day polling place locations affect voter turnout? We study the behavior of more than 2 million eligible voters across three closely-contested presidential elections (2008–2016) in the swing state of North Carolina. Leveraging within-voter variation in polling place location change over time, we demonstrate that polling place changes reduce Election Day voting on average statewide. However, this effect is almost completely offset by substitution into early voting, suggesting that voters, on average, respond to a change in their polling place by choosing to vote early. While there is heterogeneity in these effects by the distance of the polling place change and the race of the affected voter, the fully offsetting substitution into early voting still obtains. We theorize this is because voters whose polling places change location receive notification mailers, offsetting search costs and priming them to think about the election before election day, driving early voting.",
    links: { pdf: "assets/papers/CEFS_PSRM_PPChangeAndParticipation.pdf", doi: "https://doi.org/10.1017/psrm.2020.43" }
  },
  {
    title: "Policy Effects, Partisanship, and Elections: How Medicaid Expansion Affected Public Opinion toward the Affordable Care Act",
    authors: "Joshua D. Clinton, Michael W. Sances",
    venue: "Journal of Politics", year: 2020, type: "article", featured: false,
    topics: ["public opinion", "elections"],
    abstract: "The Affordable Care Act (ACA) is one of the most consequential policies enacted in recent decades, but its political divisiveness and complexity call into question whether its effects can change public opinion. Using the varied implementation of one of the ACA’s key provisions—the expansion of Medicaid—and nearly 300,000 survey responses analyzed using a difference-in-differences design, we find the expansion of Medicaid makes respondents 1.5 percentage points more positive toward the ACA and 2.2 points less likely to support repealing the ACA. Effects do not vary meaningfully by partisanship, are strongest for those most likely to be directly affected, and are stronger after the 2016 election increased the chances of repeal. In addition to highlighting the ability of partisan policies to change public opinion when credibly threatened, we demonstrate how to estimate changes in model-based group opinion without bias.",
    links: { pdf: "assets/papers/SancesClintonAJPS_2021.pdf", doi: "https://doi.org/10.1086/710085" }
  },
  {
    title: "The Effect of Majority Party Agenda Setting on Roll Calls",
    authors: "Joshua D. Clinton",
    venue: "Public Choice", year: 2020, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "How well can roll calls detect the causal impact of majority party agenda setting in Congress? Estimating the counterfactual required to assess the effects of majority party agenda setting is complicated by time-varying differences in the political environment and the fact that measures commonly used to control for compositional changes may themselves depend on the extent of agenda control being exercised. Using techniques popularized by recent work focused on causal inference, I characterize whether agenda changes occurring during changes in majority party control in the US House of Representatives are consistent with predictions from models of majority party agenda control. Comparing how the same members in consecutive Congresses are affected by changes in party control and using fixed effects to account for time-varying differences between consecutive Congresses helps isolate the changes in the agenda attributable to agenda setting. The analyses highlight the challenge in consistently estimating the effects of agenda control and suggest that although recent transitions produce patterns consistent with the predictions of agenda setting theories, the average effect over the post-Reconstruction period is harder to interpret as being produced by agenda control.",
    links: { doi: "https://doi.org/10.1007/s11127-019-00706-3" }
  },
  {
    title: "Who Participated in the ACA? Gains in Insurance Coverage by Political Partisanship",
    authors: "Joshua D. Clinton, Michael W. Sances",
    venue: "Journal of Health Politics, Policy and Law", year: 2019, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "Context: The authors examined whether participation in the Affordable Care Act (ACA) differed by political partisanship. Answering this question is important for understanding how contentious elite-level decision making and discourse may affect policy uptake, and the ability of the ACA to create a constituency of beneficiaries invested in its support. Methods: The authors combined county- and individual-level data on health insurance gains, political partisanship, and variation in the ACA's implementation to test whether Democratic areas and individuals are more likely to gain health insurance after implementation of the ACA. Findings: While there was some evidence that Democrats experienced larger insurance gains than Republicans, the major partisan divide was in how insurance was obtained: Democrats were more likely than Republicans to enroll in private marketplace plans, but there were no partisan differences in uptake among those gaining insurance via the Medicaid expansions. Conclusions: These results provide some important context for the well-known and persistent partisan divide in support for the ACA, an attitudinal divide whose reflection in program participation appears conditional on the salience of different aspects of the ACA.",
    links: { pdf: "assets/papers/SC_JHPPL.pdf", doi: "https://doi.org/10.1215/03616878-7366988" }
  },
  {
    title: "Knockout Blows or the Status Quo? Momentum in the 2016 Primaries",
    authors: "Joshua D. Clinton, Andrew M. Engelhardt, Marc J. Trussler",
    venue: "Journal of Politics", year: 2019, type: "article", featured: false,
    topics: ["elections", "polling", "public opinion"],
    abstract: "Notions of momentum loom large in accounts of presidential primaries despite imprecision about its meaning and measurement. Defining momentum as the impact election outcomes have on candidate support above and beyond existing trends and leveraging a rolling cross section of more than 325,000 interviews to examine daily changes in candidate support in the 2016 nomination contests reveal scant evidence that primary election outcomes uniquely affect respondents’ preferences over the competing candidates. Preferences sometimes respond to election outcomes, but the estimated effects are indistinguishable from effects occurring on nonelection days. There is also no evidence that those who should be most receptive to new information are more affected by election outcomes. As a result, our investigation strongly suggests that election outcomes are not uniquely important for affecting opinions and shaping the outcome of nomination contests.",
    links: { pdf: "assets/papers/CET_JOP2019.pdf", doi: "https://doi.org/10.1086/703383" }
  },
  {
    title: "Lawmaking in American Legislatures: An Empirical Investigation",
    authors: "Joshua D. Clinton, Mark D. Richardson",
    venue: "Journal of Public Policy", year: 2019, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Given pervasive gridlock at the national level, state legislatures are increasingly the place where notable policy change occurs. Investigating such change is difficult because it is often hard to characterise policy change and use observable data to evaluate theoretical predictions; it is subsequently unclear whether law-making explanations focusing on the US Congress also apply to state legislatures. We use several measures of state policy outcomes to examine lawmaking in state legislatures across nearly two decades, and we argue for using simulation studies to connect theoretical predictions to empirical specifications and help interpret the theoretical relevance of estimated correlations. Doing so reveals that the observed law-making outcomes we study are most consistent with law-making models emphasising the importance of the chamber median and the powers of the governor rather than those that focus on the preferences of the majority party.",
    links: { pdf: "assets/papers/CR_JPP2016.pdf", doi: "https://doi.org/10.1017/s0143814x17000265" }
  },
  {
    title: "The Politics of Policy: The Initial Mass Political Effects of Medicaid Expansion in the States",
    authors: "Joshua D. Clinton, Michael W. Sances",
    venue: "American Political Science Review", year: 2018, type: "article", featured: true,
    topics: ["public opinion", "elections"],
    abstract: "Whether public policy affects electoral politics is an enduring question with an elusive answer. We identify the impact of the highly contested Patient Protection and Affordable Care Act (ACA) of 2010 by exploiting cross-state variation created by the 2012 Supreme Court decision in National Federation of Independent Business v. Sebelius. We compare changes in registration and turnout following the expansion of Medicaid in January of 2014 to show that counties in expansion states experience higher political participation compared to similar counties in nonexpansion states. Importantly, the increases we identify are concentrated in counties with the largest percentage of eligible beneficiaries. The effect on voter registration persists through the 2016 election, but an impact on voter turnout is only evident in 2014. Despite the partisan politics surrounding the ACA—a political environment that differs markedly from social programs producing policy feedbacks in the past—our evidence is broadly consistent with claims that social policy programs can produce some political impacts, at least in the short-term.",
    links: { pdf: "assets/papers/CS_APSR2018.pdf", doi: "https://doi.org/10.1017/s0003055417000430" }
  },
  {
    title: "An Evaluation of the 2016 Election Polls in the United States: AAPOR Task Force Report",
    authors: "Joshua D. Clinton, Courtney Kennedy, et al. (AAPOR Task Force)",
    venue: "Public Opinion Quarterly", year: 2018, type: "article", featured: false,
    topics: ["polling", "elections"],
    abstract: "The 2016 presidential election was a jarring event for polling in the United States. Preelection polls fueled high-profile predictions that Hillary Clinton’s likelihood of winning the presidency was about 90 percent, with estimates ranging from 71 to over 99 percent. When Donald Trump was declared the winner of the presidency, there was a widespread perception that the polls failed. But did the polls fail? And if so, why? Those are among the central questions addressed by an American Association for Public Opinion Research (AAPOR) ad hoc committee. This paper presents the committee’s analysis of the performance of preelection polls in 2016, how that performance compares to polling in prior elections, and the extent to which performance varied by poll design. In addition, the committee examined several theories as to why many polls, particularly in the Upper Midwest, underestimated support for Trump. The explanations for which the most evidence exists are a late swing in vote preference toward Trump and a pervasive failure to adjust for overrepresentation of college graduates (who favored Clinton). In addition, there is clear evidence that voter turnout changed from 2012 to 2016 in ways that favored Trump, though there is only mixed evidence that misspecified likely voter models were a major cause of the systematic polling error. Finally, there is little evidence that socially desirable (Shy Trump) responding was an important contributor to poll error.",
    links: { pdf: "assets/papers/AAPOR-2016-Election-Polling-Report.pdf", doi: "https://doi.org/10.1093/poq/nfx047" }
  },
  {
    title: "Elite Perceptions of Agency Ideology and Workforce Skill",
    authors: "Joshua D. Clinton, David E. Lewis, Mark D. Richardson",
    venue: "Journal of Politics", year: 2018, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Perceptions of the policy leanings of government agencies are an important component of an agency’s political environment, and an agency’s political environment can greatly influence how agencies formulate and implement public policy. We use a recent survey of federal executives to measure the perceptions of the ideological leanings of twice as many agencies as previously possible. Our estimates compare reassuringly to extant measures based on both expert evaluations and aggregations of the opinions of those working within agencies. We also develop a novel measure of perceptions of workforce skill. Given the prominence of the concepts of agency ideology and skill in theories of executive branch politics, the estimates we generate provide important opportunities for understanding agencies’ political environments and their implications for policy making. The generation of these measures also illustrates an approach to measuring hard-to-observe characteristics that could usefully be adopted in other contexts.",
    links: { pdf: "assets/papers/RCL_JOP2017.pdf", doi: "https://doi.org/10.1086/694846" }
  },
  {
    title: "Changing Owners, Changing Content: Does Who Owns the News Matter for the News?",
    authors: "Joshua D. Clinton, Allison Archer",
    venue: "Political Communication", year: 2018, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "The press is essential for creating an informed citizenry, but its existence depends on attracting and maintaining an audience. It is unclear whether supply-side effects—including those dictated by the owners of the media—influence how the media cover politics, yet this question is essential given their abilities to set the agenda and frame issues that are covered. We examine how ownership influences media behavior by investigating the impact of Rupert Murdoch’s purchase of the Wall Street Journal (WSJ) in August 2007. We collect data on every front-page story and editorial for 27 months, and we compare the difference in political coverage between the New York Times (NYT) and WSJ using a difference-in-differences design. We show that the amount of political content in the opinion pages of the two papers were unchanged by the sale, but the WSJ’s front-page coverage of politics increased markedly relative to the NYT. Similar patterns emerge when comparing the WSJ’s content to USA Today and the Washington Post. Our finding highlights potential limits to journalists’ ability to fulfill their supposed watchdog role in democracies without interference from owners in the boardroom.",
    links: { pdf: "assets/papers/AC_PC2017.pdf", doi: "https://doi.org/10.1080/10584609.2017.1375581" }
  },
  {
    title: "Coding the Ideological Direction and Content of Policies",
    authors: "Joshua D. Clinton",
    venue: "Annual Review of Political Science", year: 2017, type: "article", featured: true,
    topics: ["methodology", "Congress"],
    abstract: "Many of the questions that are central to political science involve understanding either the causes or consequences of policy change. Scholars have relied on both data-driven and model-driven approaches to characterize the content and direction of policy. This review briefly describes several prominent measures from each approach, and it highlights important limitations that scholars continue to face in the hope of prompting continued contributions to this difficult, but essential, task.",
    links: { pdf: "assets/papers/C_AR2017.pdf", doi: "https://doi.org/10.1146/annurev-polisci-062615-031524" }
  },
  {
    title: "A House Divided? Roll Calls, Polarization, and Policy Differences in the U.S. House, 1877–2011",
    authors: "Joshua D. Clinton, David A. Bateman, John S. Lapinski",
    venue: "American Journal of Political Science", year: 2017, type: "article", featured: true,
    topics: ["Congress", "methodology"],
    abstract: "The study of political conflict in legislatures is fundamental to understanding the nature of governance, but also difficult because of changes in membership and the issues addressed over time. Focusing on the enduring issue of civil rights in the United States since Reconstruction, we show that using current methods and measures to characterize elite ideological disagreements makes it hard to interpret or reconcile the conflicts with historical understandings because of their failure to adequately account for the policies being voted upon and the consequences of the iterative lawmaking process. Incorporating information about the policies being voted upon provides a starkly different portrait of elite conflict—not only are contemporary parties relatively less divided than is commonly thought, but the conflict occurs in a smaller, and more liberal, portion of the policy space. These findings have important implications for a broad range of work that uses elite actions to compare political conflict/polarization across time.",
    links: { pdf: "assets/papers/BCL_AJPS2016.pdf", doi: "https://doi.org/10.1111/ajps.12281" }
  },
  {
    title: "Assessing the Variation of Formal Military Alliances in the International System, 1816–2000",
    authors: "Joshua D. Clinton, Brett Benson",
    venue: "Journal of Conflict Resolution", year: 2016, type: "article", featured: false,
    topics: ["methodology"],
    abstract: "Many critical questions involving the causes and consequences of formal military alliances are related to differences between various alliances in terms of the scope of the formal obligations, the depth of the commitment between signatories, and the potential military capacity of the alliance. Studying the causes and consequences of such variation is difficult because while we possess many indicators of various features of an alliance agreement that are thought to be related to the broader theoretical concepts of interest, it is unclear how to use the multitude of observable measures to characterize these broader underlying concepts. We show how a Bayesian measurement model can be used to provide parsimonious estimates of the scope, depth, and potential military capacity of formal military alliances signed between 1816 and 2000. We use the resulting estimates to explore some core intuitions that were previously difficult to verify regarding the formation of the formal alliance agreement, and we check the validity of the measures against known cases in alliances as well as by exploring common expectations regarding historical alliances.",
    links: { pdf: "assets/papers/BC_JCR2014.pdf", doi: "https://doi.org/10.1177/0022002714560348" }
  },
  {
    title: "Public Information, Public Learning, and Public Opinion: Democratic Accountability in Education Policy",
    authors: "Joshua D. Clinton, Jason Grissom",
    venue: "Journal of Public Policy", year: 2015, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "Theories of political accountability assume citizens use information about the performance of government to hold public officials accountable, but whether citizens actually use information is difficult to directly examine. We take advantage of the importance of citizen-driven, performance-based accountability for education policy in Tennessee to conduct a survey experiment that identifies the effect of new information, mistaken beliefs and differing considerations on the evaluation of public officials and policy reforms using 1,500 Tennesseans. Despite an emphasis on reporting outcomes for school accountability policies in the state, mistaken beliefs are prevalent and produce overly optimistic assessments of the institutions responsible for statewide education policy. Moreover, individuals update their assessments of these institutions in an unbiased way when provided with objective performance data about overall student performance. Providing additional information about race-related performance differences does not alter this relationship, however. Finally, support for specific policies that are intended to improve student performance is unchanged by either type of performance information; opinions about policy reforms are instead most related to race and existing partisan commitments.",
    links: { pdf: "assets/papers/CG_JPP2015.pdf", doi: "https://doi.org/10.1017/s0143814x14000312" }
  },
  {
    title: "The National News Media’s Effect on Congress: How Fox News Affected Elites in Congress",
    authors: "Joshua D. Clinton, Ted Enamorado",
    venue: "Journal of Politics", year: 2014, type: "article", featured: false,
    topics: ["Congress", "public opinion"],
    abstract: "Despite the prominence of the national news media, it is unclear whether elected officials are affected by the national news media in policy-consequential ways because of the difficulty of disentangling the influence of the media on Congress from Congress’s influence on the media. We use a unique opportunity to determine whether position-taking behavior in Congress and the likelihood of reelection is affected by the national news media. Using the fact that the Fox News Channel spread gradually across the United States after being launched in October of 1996 in ways unrelated to the ideology of congressional districts and the incumbent representatives, we show that representatives become less supportive of President Clinton in districts where Fox News begins broadcasting than similar representatives in similar districts where Fox News was not broadcast. Moreover, the effects took a few years to be realized, and the entry of Fox News in a district did not appear to affect which representatives were reelected. Consistent with theories emphasizing the anticipatory actions taken by elected officials to maximize their electoral security in the face of changing electoral conditions, our results suggest that the national media may slightly affect the prospects for policy change by altering representatives’ expectations and the positions that they take.",
    links: { pdf: "assets/papers/CE_JOP2014.pdf", doi: "https://doi.org/10.1017/s0022381614000425" }
  },
  {
    title: "Influencing the Bureaucracy: The Irony of Congressional Oversight",
    authors: "Joshua D. Clinton, David Lewis, Jen Selin",
    venue: "American Journal of Political Science", year: 2014, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Does the president or Congress have more influence over policymaking by the bureaucracy? Despite a wealth of theoretical guidance, progress on this important question has proven elusive due to competing theoretical predictions and severe difficulties in measuring agency influence and oversight. We use a survey of federal executives to assess political influence, congressional oversight, and the policy preferences of agencies, committees, and the president on a comparable scale. Analyzing variation in political influence across and within agencies reveals that Congress is less influential relative to the White House when more committees are involved. While increasing the number of involved committees may maximize the electoral benefits for members, it may also undercut the ability of Congress as an institution to collectively respond to the actions of the presidency or the bureaucracy.",
    links: { pdf: "assets/papers/CLS_AJPS2014.pdf", doi: "https://doi.org/10.1111/ajps.12066" }
  },
  {
    title: "Robo-Polls: Taking Cues from Traditional Sources?",
    authors: "Joshua D. Clinton, Steve Rogers",
    venue: "PS: Political Science & Politics", year: 2013, type: "article", featured: false,
    topics: ["polling", "elections"],
    abstract: "After the 2012 Republican New Hampshire primary, 159 poll results were released prior to the subsequent nomination contests in the Republican presidential primary. More than two-thirds of these polls relied on interactive voice response (IVR) software to conduct the interviews. We evaluate the ability of polls to predict the vote-share for the Republican candidates Romney, Santorum, and Gingrich. We find no overall difference in the average accuracy of IVR and traditional human polls, but IVR polls conducted prior to human polls are significantly poorer predictors of election outcomes than traditional human polls even after controlling for characteristics of the states, polls, and electoral environment. These findings provide suggestive, but not conclusive, evidence that pollsters may take cues from one another given the stakes involved. If so, reported polls should not be assumed to be independent of one another and so-called poll-of-polls will be misleadingly precise.",
    links: { pdf: "assets/papers/CR_PS2013.pdf", doi: "https://doi.org/10.1017/s1049096513000012" }
  },
  {
    title: "Congress, Lawmaking, and the Fair Labor Standards Act, 1971–2000",
    authors: "Joshua D. Clinton",
    venue: "American Journal of Political Science", year: 2012, type: "article", featured: false,
    topics: ["Congress"],
    abstract: "Lawmaking studies and evaluations of competing accounts of policy change cannot easily assess the nature of policy change due to the difficulty of locating the status quo and proposals relative to the preferences of critical political actors. Focusing on activity involving the Fair Labor Standards Act, I investigate how the attempted and successful policy change between the 92nd Congress (1971–72) and the 106th Congress (1999–2000) compares to the predicted lawmaking activity according to dominant lawmaking models. Characterizing the incidence and magnitude of policy change over nearly 30 years reveals that policy change is rarer and smaller than current theories predict. Change occurs when the status quo is more extreme than the preferences of the pivot most supportive of the status quo according to supermajoritarian models, but there are many instances where similarly extreme status quos are left unchanged. Moreover, when change occurs, it exhibits a strong status quo bias and the outcome is often indistinguishable from the preferences of the pivot who most prefers the status quo.",
    links: { doi: "https://doi.org/10.1111/j.1540-5907.2011.00547.x" }
  },
  {
    title: "Separated Powers in the United States: The Ideology of Agencies, Presidents, and Congress",
    authors: "Joshua D. Clinton, Anthony Bertelli, Christian Grose, David Lewis, David Nixon",
    venue: "American Journal of Political Science", year: 2012, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Government agencies service interest groups, advocate policies, provide advice to elected officials, and create and implement public policy. Scholars have advanced theories to explain the role of agencies in American politics, but efforts to test these theories are hampered by the inability to systematically measure agency preferences. We present a method for measuring agency ideology that yields ideal point estimates of individual bureaucrats and agencies that are directly comparable with those of other political actors. These estimates produce insights into the nature of the bureaucratic state and provide traction on a host of questions about American politics. We discuss what these estimates reveal about the political environment of bureaucracy and their potential for testing theories of political institutions. We demonstrate their utility by testing key propositions from Gailmard and Patty's (2007) influential model of political control and endogenous expertise development.",
    links: { doi: "https://doi.org/10.1111/j.1540-5907.2011.00559.x" }
  },
  {
    title: "Using Roll Call Estimates to Test Models of Politics",
    authors: "Joshua D. Clinton",
    venue: "Annual Review of Political Science", year: 2012, type: "article", featured: true,
    topics: ["methodology", "Congress"],
    abstract: "Measuring the preferences of political elites is critically important for analyzing the determinants and consequences of elite behavior. The decisions that elites make when casting roll call votes seem to provide an ideal opportunity for measuring elite preferences and testing theories of the political process. The fact that the resulting ideal points are a consequence of applying a statistical model to a model of individual choice, however, may affect their usefulness for measuring elite preferences and testing predictions regarding individual and collective decision making. When analyzing roll call votes, scholars should be mindful of how their decisions may affect the estimates from their analyses. I use simulations to illustrate how the nonrandom selection of roll calls may affect the ability to estimate ideal points that accurately reflect the preferences responsible for generating the observed votes, and I discuss work integrating the many models involved in the production and consumption of roll call estimates.",
    links: { pdf: "assets/papers/C_AR2012.pdf", doi: "https://doi.org/10.1146/annurev-polisci-043010-095836" }
  },
  {
    title: "More a Molehill than a Mountain: The Effects of the Blanket Primary on Elected Officials’ Behavior from California",
    authors: "Joshua D. Clinton, Will Bullock",
    venue: "Journal of Politics", year: 2011, type: "article", featured: false,
    topics: ["elections", "Congress"],
    award: "Winner, 2011 Journal of Politics Best Paper Award.",
    abstract: "Scholars, politicians, parties, and the U.S. Supreme Court argue that restricting the set of eligible voters for a primary election affects the nature of representation voters receive from elected officials. Evidence supporting this argument is elusive because the same elected officials are often responsible for determining the type of primary election used. Using a quasi-natural experiment resulting from a 1996 constitutional referendum in California, we examine whether expanding the eligible primary electorate from only registered partisans to any registered voter affects who is elected and the positions elected representatives take. We show that the blanket primary appears to favor the election of more moderate representatives and that incumbents take more moderate positions in the U.S. House of Representatives and California Assembly. This is true only in less partisan districts, and there are no effects in districts dominated by a single party. These differential effects suggest that concerns about representatives becoming increasingly polarized in legislatures are not likely remedied by simply expanding the set of voters eligible to participate in primary elections.",
    links: { doi: "https://doi.org/10.1017/s0022381611000557" }
  },
  {
    title: "To Simulate or NOMINATE?",
    authors: "Joshua D. Clinton, Simon Jackman",
    venue: "Legislative Studies Quarterly", year: 2009, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Carroll et al. (2009) summarize the similarities and differences between the NOMINATE and IDEAL methods of fitting spatial voting models to binary roll-call data. As those authors note, for the class of problems with which either NOMINATE and the Bayesian quadratic-normal model can be used, the ideal point estimates almost always coincide, and when they do not, the discrepancy is due to the somewhat arbitrary identification and computational constraints imposed by each method. There are, however, many problems for which the Bayesian quadratic-normal model can be easily generalized, so as to address a broad array of questions and take advantage of additional data. Given the nature and source of the differences between NOMINATE and the Bayesian approach—as well as the fact that both approaches are approximations of the decision-making processes being modeled—we believe that it is preferable to choose the more flexible Bayesian approach.",
    links: { pdf: "assets/papers/CJ_LSQ2009.pdf", doi: "https://doi.org/10.3162/036298009789869691" }
  },
  {
    title: "Laws and Roll Calls in the U.S. Congress, 1891–1994",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "Legislative Studies Quarterly", year: 2008, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Recent empirical studies of lawmaking activity by legislatures rely heavily on roll call based measures and assume that roll call activity reflects lawmaking activity. We question this assumption for the case of the U.S. Congress. We examine several plausible sources of dissonance between the set of enacted public statutes and the universe of recorded votes in the U.S. Congress, using a comprehensive dataset of public enactments and roll call activity between 1891 and 1994. Because only 11.9% of the bills signed into law receive a recorded vote in the House, only 7.9% receive a recorded vote in the Senate, and only 5.5% receive a recorded vote in both the House and Senate, we provide guidance as to when studying voting behavior is likely a reasonable proxy for lawmaking behavior. There are sometimes important differences between the laws that do and do not receive a roll call that researchers should account for when using roll calls to study lawmaking in the U.S. Congress.",
    links: { pdf: "assets/papers/CL_LSQ2008.pdf", doi: "https://doi.org/10.3162/036298008786403097" }
  },
  {
    title: "Design, Inference, and the Strategic Logic of Suicide Terrorism",
    authors: "Joshua D. Clinton, Scott Ashworth, Adam Meirowitz, Kristopher W. Ramsay",
    venue: "American Political Science Review", year: 2008, type: "article", featured: false,
    topics: ["methodology"],
    abstract: "In “The Strategic Logic of Suicide Terrorism,” Robert Pape (2003) presents an analysis of his suicide terrorism data. He uses the data to draw inferences about how territorial occupation and religious extremism affect the decision of terrorist groups to use suicide tactics. We show that the data are incapable of supporting Pape's conclusions because he “samples on the dependent variable”—the data only contain cases in which suicide terror is used. We construct bounds (Manski, 1995) on the quantities relevant to Pape's hypotheses and show exactly how little can be learned about the relevant statistical associations from the data produced by Pape's research design.",
    links: { pdf: "assets/papers/ACMR2008.pdf", doi: "https://doi.org/10.1017/s0003055408080167" }
  },
  {
    title: "Expert Opinion, Agency Characteristics, and Agency Preferences",
    authors: "Joshua D. Clinton, David E. Lewis",
    venue: "Political Analysis", year: 2008, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "The study of bureaucracies and their relationship to political actors is central to understanding the policy process in the United States. Studying this aspect of American politics is difficult because theories of agency behavior, effectiveness, and control often require measures of administrative agencies' policy preferences, and appropriate measures are hard to find for a broad spectrum of agencies. We propose a method for measuring agency preferences based upon an expert survey of agency preferences for 82 executive agencies in existence between 1988 and 2005. We use a multirater item response model to provide a principled structure for combining subjective ratings based on scholarly and journalistic expertise with objective data on agency characteristics. We compare the resulting agency preference estimates and standard errors to existing alternative measures, discussing both the advantages and limitations of the method.",
    links: { pdf: "assets/papers/CL_PA2007.pdf", doi: "https://doi.org/10.1093/pan/mpm009" }
  },
  {
    title: "Lawmaking and Roll Calls",
    authors: "Joshua D. Clinton",
    venue: "Journal of Politics", year: 2007, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "The ability to generate theories of lawmaking has not been matched by an ability to evaluate the success of these theories for explaining legislative reality. The principal problem in testing lawmaking theories is that many analysts use roll-call votes—or various measures based on roll-call votes—when, in fact, these votes are partly a cause and partly a consequence of the very things the theories seek to explain. This can lead to erroneous substantive conclusions and characterizations. I show how embedding the theoretical predictions of the party gatekeeping and veto pivot theories of lawmaking within a statistical model used to estimate ideal points yields a straightforward test; if the gridlock interval measured using votes on policies predicted by the theories is nonzero, the predictions of the theory are not supported by the observed data and assumed behavioral voting model. Implementing the test reveals little support for either theory.",
    links: { pdf: "assets/papers/C_JOP2007.pdf", doi: "https://doi.org/10.1111/j.1468-2508.2007.00543.x" }
  },
  {
    title: "Does Advertising Exposure Affect Turnout?",
    authors: "Joshua D. Clinton, Scott Ashworth",
    venue: "Quarterly Journal of Political Science", year: 2007, type: "article", featured: false,
    topics: ["elections"],
    abstract: "We identify an exogenous source of variation in exposure to campaign advertising in the 2000 presidential election, based on residence in battleground states. If exposure to campaign advertising makes a potential voter significantly more likely to vote, then we should see significantly greater turnout in battleground states. We do not. This result is robust to several specifications and evident in a natural experiment consisting of New Jersey residents. Conditional on existing campaign targeting strategies, campaigns do not affect the turnout decisions of the voters we study.",
    links: { pdf: "assets/papers/AC_QJPS2007.pdf", doi: "https://doi.org/10.1561/100.00005051" }
  },
  {
    title: "Representation in Congress: Constituents and Roll Calls in the 106th House",
    authors: "Joshua D. Clinton",
    venue: "Journal of Politics", year: 2006, type: "article", featured: true,
    topics: ["Congress", "public opinion"],
    abstract: "This paper examines the extent to which constituency and subconstituency preferences are reflected in roll-call voting in the 106th House. Aggregating 100,814 randomly selected respondents to measure subconstituency preferences provides an unprecedented ability to measure subconstituency preferences in the House. Looking at the relationship over all votes, “key votes,” and on individual votes confirms that representatives are not completely responsive to the district mean voter, that only majority party Republicans are especially responsive to the preferences of same-party constituents, and that same-party constituency preferences cannot entirely account for systematic differences in Republican and Democratic voting behavior.",
    links: { pdf: "assets/papers/C_JOP2006.pdf", doi: "https://doi.org/10.1111/j.1468-2508.2006.00415.x" }
  },
  {
    title: "Measuring Legislative Accomplishment, 1877–1994",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "American Journal of Political Science", year: 2006, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Understanding the dynamics of lawmaking in the United States is at the center of the study of American politics. A fundamental obstacle to progress in this pursuit is the lack of measures of policy output, especially for the period prior to 1946. The lack of direct legislative accomplishment measures makes it difficult to assess the performance of our political system. We provide a new measure of legislative significance and accomplishment. Specifically, we demonstrate how item-response theory can be combined with a new dataset that contains every public statute enacted between 1877 and 1994 to estimate “legislative importance” across time. Although the resulting estimates and associated standard errors provide new opportunities for scholars interested in analyzing U.S. policymaking since 1877, the methodology we present is not restricted to Congress, the United States, or lawmaking.",
    links: { pdf: "assets/papers/CL_AJPS2006.pdf", doi: "https://doi.org/10.1111/j.1540-5907.2006.00181.x" }
  },
  {
    title: "The Statistical Analysis of Roll Call Data",
    authors: "Joshua D. Clinton, Simon Jackman, Doug Rivers",
    venue: "American Political Science Review", year: 2004, type: "article", featured: true,
    topics: ["methodology", "Congress"],
    abstract: "We develop a Bayesian procedure for estimation and inference for spatial models of roll call voting. This approach is extremely flexible, applicable to any legislative setting, irrespective of size, the extremism of the legislators' voting histories, or the number of roll calls available for analysis. The model is easily extended to let other sources of information inform the analysis of roll call data, such as the number and nature of the underlying dimensions, the presence of party whipping, the determinants of legislator preferences, and the evolution of the legislative agenda; this is especially helpful since generally it is inappropriate to use estimates of extant methods (usually generated under assumptions of sincere voting) to test models embodying alternate assumptions (e.g., log-rolling, party discipline). A Bayesian approach also provides a coherent framework for estimation and inference with roll call data that eludes extant methods; moreover, via Bayesian simulation methods, it is straightforward to generate uncertainty assessments or hypothesis tests concerning any auxiliary quantity of interest or to formally compare models. In a series of examples we show how our method is easily extended to accommodate theoretically interesting models of legislative behavior. Our goal is to provide a statistical framework for combining the measurement of legislative preferences with tests of models of legislative behavior.",
    links: { pdf: "assets/papers/CJR_APSR2004.pdf", doi: "https://doi.org/10.1017/s0003055404001194" }
  },
  {
    title: "Testing Explanations of Strategic Voting in Legislatures: A Reexamination of the Compromise of 1790",
    authors: "Joshua D. Clinton, Adam Meirowitz",
    venue: "American Journal of Political Science", year: 2004, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    award: "Winner, 2002 Robert H. Durr Award.",
    abstract: "A difficult yet prevalent problem in legislative politics is how to assess explanations when observable actions may not represent true (and unobserved) legislator preferences. We present a method for analyzing the validity of theoretical/historical accounts that unifies theory, history, and measurement. We argue that approaches to testing accounts of legislative behavior which are theoretically and historically agnostic are not always best and present an approach which: (1) forms an explicit explanation of behavior (here a simple dynamic voting game) that yields estimable parameter constraints, and (2) tests these constraints using a customized empirical model that is as consistent as possible with the explanation. We demonstrate the method using legislative voting data from the first Congress (1789–1791). Using the idea of sophisticated equivalents from voting theory we subject the traditional account of the “Compromise of 1790” to a statistical test and find that there is reason to doubt the claim that legislators of the time believed the specified log roll was taking place. The results suggest that the capital location and assumption issues were resolved independently.",
    links: { pdf: "assets/papers/CM_AJPS2004.pdf", doi: "https://doi.org/10.1111/j.0092-5853.2004..x" }
  },
  {
    title: "‘Targeted’ Advertising and Voter Turnout: An Experimental Study of the 2000 Presidential Election",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "Journal of Politics", year: 2004, type: "article", featured: false,
    topics: ["elections"],
    abstract: "Scholars disagree whether negative advertising demobilizes or stimulates the electorate. We use an experiment with over 10,200 eligible voters to evaluate the two leading hypotheses of negative political advertising. We extend the analysis to examine whether advertising differentially impacts the turnout of voter subpopulations depending on the advertisement's message. In the short term, we find no evidence that exposure to negative advertisements decreases turnout and little that suggests it increases turnout. Any effect appears to depend upon the message of the advertisement and the characteristics of the viewer. In the long term, we find little evidence that the information contained in the treatment groups' advertisements is sufficient to systematically alter turnout.",
    links: { pdf: "assets/papers/CL_JOP2004.pdf", doi: "https://doi.org/10.1046/j.1468-2508.2004.00142.x" }
  },
  {
    title: "“The Most Liberal Senator”? Analyzing and Interpreting Congressional Roll Calls",
    authors: "Joshua D. Clinton, Simon Jackman, Doug Rivers",
    venue: "PS: Political Science & Politics", year: 2004, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Revisiting the National Journal’s claim that John Kerry was the Senate’s top liberal, we show that accounting for measurement uncertainty makes the ranking far less certain and places both Kerry and President Bush at the extremes of the 108th Senate.",
    links: { pdf: "assets/papers/CJR_PS2004.pdf", doi: "https://doi.org/10.1017/s1049096504045196" }
  },
  {
    title: "Integrating Voting Theory and Roll Call Analysis: A Framework",
    authors: "Joshua D. Clinton, Adam Meirowitz",
    venue: "Political Analysis", year: 2003, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Scholars of legislative studies typically use ideal point estimates from scaling procedures to test theories of legislative politics. We contend that theory and methods may be better integrated by directly incorporating maintained and to be tested hypotheses in the statistical model used to estimate legislator preferences. In this view of theory and estimation, formal modeling (1) provides auxiliary assumptions that serve as constraints in the estimation process, and (2) generates testable predictions. The estimation and hypothesis testing procedure uses roll call data to evaluate the validity of theoretically derived to be tested hypotheses in a world where maintained hypotheses are presumed true. We articulate the approach using the language of statistical inference (both frequentist and Bayesian). The approach is demonstrated in analyses of the well-studied Powell amendment to the federal aid-to-education bill in the 84th House and the Compromise of 1790 in the 1st House.",
    links: { pdf: "assets/papers/CM_PA2003.pdf", doi: "https://doi.org/10.1093/pan/mpg023" }
  },
  {
    title: "Agenda Constrained Legislator Ideal Points and the Spatial Voting Model",
    authors: "Joshua D. Clinton, Adam Meirowitz",
    venue: "Political Analysis", year: 2001, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Existing preference estimation procedures do not incorporate the full structure of the spatial model of voting, as they fail to use the sequential nature of the agenda. In the maximum likelihood framework, the consequences of this omission may be far-reaching. First, information useful for the identification of the model is neglected. Specifically, information that identifies the proposal locations is ignored. Second, the dimensionality of the policy space may be incorrectly estimated. Third, preference and proposal location estimates are incorrect and difficult to interpret in terms of the spatial model. We also show that the Bayesian simulation approach to ideal point estimation (Clinton et al. 2000; Jackman 2000) may be improved through the use of information about the legislative agenda. This point is illustrated by comparing several preference estimators of the first U.S. House (1789–1791).",
    links: { pdf: "assets/papers/CM_PA2001.pdf", doi: "https://doi.org/10.1093/polana/9.3.242" }
  },

  /* ===================== BOOK CHAPTERS ===================== */
  {
    title: "Public Opinion in the Age of AI",
    authors: "Joshua D. Clinton (Chair), Soubhik Barari, Ethan Busby, Trent D. Buskirk, Raymond Duch, Anna-Carolina Haensch, D. Sunshine Hillygus, Courtney Kennedy, Kevin Munger, Douglas Rivers, Sean Westwood",
    venue: "in Artificial Intelligence, Politics, and Political Science (Persily & Tucker, eds.), Cambridge University Press",
    year: 2026, type: "chapter", featured: false, isbn: "9781047774734",
    topics: ["polling", "public opinion", "data science"],
    abstract: "The study of public opinion occupies an uneasy space between theory and measurement, referring simultaneously to a latent set of beliefs held by members of a political community and to the responses elicited through imperfect, context-sensitive instruments. The integration of AI into public opinion research makes this tension unavoidable. AI offers tools that are faster, cheaper, and more flexible than anything available, but the effects also extend further in ways that can blur distinctions between measuring and manufacturing opinion. AI raises questions the field has long grappled with: What exactly is public opinion, and what counts as evidence of it? Whether AI enriches or distorts the study of public opinion depends on choices that are as much theoretical as technical. In the limit, substituting AI-generated responses for human voices risks a form of epistemic collapse in which public opinion research loses its anchor to the people it purports to represent.",
    links: { pdf: "assets/papers/Cetal_APSAAI_2026.pdf", doi: "https://preprints.apsanet.org/engage/apsa/article-details/69fcc22b810b9dcc82e24669" }
  },
  {
    title: "Roll Calls, Voting Coalitions, and Possible Agenda Control in the U.S. House of Representatives, 1869–2024",
    authors: "Joshua D. Clinton",
    venue: "in Causal Inference and American Political Development (Jenkins, ed.), Springer",
    year: 2024, type: "chapter", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "How well can roll calls detect the causal impact of majority party agenda setting in the House of Representatives? Estimating the counterfactual required to assess the effects of majority party agenda setting is complicated by time-varying differences in the political environment and the fact that measures commonly used to control for compositional changes are themselves endogenous to the congressional agenda. To isolate the effect of agenda changes due to changes in majority status from compositional changes in the members who are serving I evaluate how the congressional agenda affects coalitions of members serving in consecutive Congresses. Using fixed effects to account for time-varying differences between consecutive Congresses and looking at the effect on members who serve in both Congresses helps isolate the effects of the changing agenda using several measures with clear theoretical predictions. Characterizing the overall pattern as well as the variation over time and by various issues both highlights the challenge of consistently estimating the effects of agenda control while also demonstrating that patterns consistent with agenda control are a relatively recent phenomenon. The time-varying evidence of patterns consistent with partisan agenda control raises important questions about how to interpret seemingly similar levels of elite polarization across time and how different processes may be responsible for similar levels of polarized voting.",
    links: { pdf: "assets/papers/Clinton2024_PublicChoiceRevised.pdf", doi: "https://doi.org/10.1007/978-3-031-74913-1_12" }
  },
  {
    title: "The Importance of Issue Representation in a Polarized Congress",
    authors: "Joshua D. Clinton, Michael W. Sances, Mary Catherine Sullivan",
    venue: "in Accountability Reconsidered (Cameron, Canes-Wrone, Gordon & Huber, eds.), Cambridge University Press",
    year: 2022, type: "chapter", featured: false,
    topics: ["Congress", "public opinion"],
    abstract: "We examine the extent to which constituents evaluate incumbents based on their policy actions in office. We focus on situations in which representatives cast a vote contrary to the constituent’s views and present two different analyses. First, we examine the universe of issues in the 2008–2017 Congressional Cooperative Election Study (CCES) surveys, which include items designed to relate constituents’ policy preferences to specific roll-call votes in the House. Second, we conduct an in-depth analysis of legislative activity around the Affordable Care Act (ACA), investigating how members of different demographic groups vary in holding House members accountable for policy positions. In both analyses, partisan labels exert a substantial, independent effect on voter evaluations, but issue positions nonetheless matter. Moreover, the ACA analysis indicates that policy effects are larger among wealthier individuals. The findings imply that despite the increasing role of partisanship in U.S. elections, issue representation remains an important force in voter evaluation of incumbents.",
    links: { pdf: "assets/papers/CSS_ArnoldPaper_Final.pdf", doi: "https://doi.org/10.1017/9781009168311.004" }
  },
  {
    title: "Measuring Political and Policy Preferences: Using Item Response Scaling",
    authors: "Joshua D. Clinton",
    venue: "in Analytics, Policy and Governance (Bachner, Hill & Ginsberg, eds.), Yale University Press",
    year: 2016, type: "chapter", featured: false,
    topics: ["methodology"],
    abstract: "An introduction to using item-response scaling to measure political and policy preferences from large-scale data.",
    links: { pdf: "assets/papers/Clinton Chapter_FINAL.pdf", doi: "https://doi.org/10.12987/9780300225174-002" }
  },
  {
    title: "Where Measures Meet History: Party Polarization During the New Deal and Fair Deal",
    authors: "Joshua D. Clinton, Ira Katznelson, John S. Lapinski",
    venue: "in Governing in a Polarized Age (Gerber & Schickler, eds.), Cambridge University Press",
    year: 2016, type: "chapter", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Bringing the content of legislation to bear on roll-call measures, we revisit party polarization during the New Deal and Fair Deal.",
    links: { pdf: "assets/papers/CKL_Mayhew.pdf", doi: "https://doi.org/10.1017/cbo9781316154977.008" }
  },
  {
    title: "Representation",
    authors: "Joshua D. Clinton, Larry Bartels, John Geer",
    venue: "in The Oxford Handbook of American Political Development",
    year: 2016, type: "chapter", featured: false,
    topics: ["public opinion", "Congress"],
    abstract: "We examine the history of political representation in the United States using a multi-stage statistical analysis of the changing relationship between roll call votes in the US House of Representatives and the preferences of citizens (as measured by presidential votes). We show that members of Congress have become considerably more responsive to constituents’ preferences over the past 40 years, reversing a half-century drought in responsiveness stemming from the South’s one-party Jim Crow era. However, the House as a whole has become less representative, veering too far left when Democrats are in the majority and too far right when Republicans are.",
    links: { pdf: "assets/papers/Representation Bartels Clinton Geer.pdf", doi: "https://doi.org/10.1093/oxfordhb/9780199697915.013.16" }
  },
  {
    title: "Measuring Significant Legislation, 1877–1948",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "in Process, Party and Policymaking, Vol. 2 (Brady & McCubbins, eds.), Stanford University Press",
    year: 2007, type: "chapter", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "We extend the measurement of significant legislation back to 1877–1948.",
    links: { pdf: "assets/papers/CL_BradyMcCubbins2007.pdf", doi: "https://doi.org/10.1515/9781503626478-027" }
  },
  {
    title: "Testing Television Advertising Using Interactive Television: The Effectiveness of Political Advertisements",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "in Excellence 2002 in International Research (Fellows, ed.), WARP",
    year: 2002, type: "chapter", featured: false,
    topics: ["elections"],
    abstract: "This paper introduces several new methods aimed at improving ad testing. The power of interactive television and scientific statistical techniques are leveraged to create a unified methodology to test ads. The methodology makes three specific improvements, including the utilization of a random probability sample, the development of a system that allows for self-administered ad experiments given in a respondent’s own home, and the employment of a fully randomized, panel experimental research design. The paper draws on empirical evidence from the Yale Advertising Study, focusing on measuring the effect of political ads on voter attitudes and behavior. The study included 12,350 interviews.",
    links: { pdf: "assets/papers/ESOMAR.pdf" }
  },

  /* ===================== REPORTS ===================== */
  {
    title: "Task Force on 2020 Pre-Election Polling: An Evaluation of the 2020 General Election Polls",
    authors: "AAPOR Task Force (chaired by Joshua D. Clinton)",
    venue: "AAPOR Report", year: 2021, type: "report", featured: false,
    topics: ["polling", "elections"],
    abstract: "The AAPOR task-force evaluation of the 2020 general-election polls and the sources of their errors.",
    links: { pdf: "assets/papers/AAPOR Task Force on 2020 Pre-Election Polling_Report FNL.pdf" }
  }
];
