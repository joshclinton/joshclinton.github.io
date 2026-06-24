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
    title: "AI Pandering: Constructing Diverging Political Realities through Conversation",
    authors: "Joshua D. Clinton, Jim Bisbee, Jennifer Larson, Da In Lee",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Revise and resubmit, Nature Communications",
    topics: ["data science", "public opinion", "methodology"],
    links: { doi: "https://preprints.apsanet.org/engage/apsa/article-details/69a746f6810b9dcc82e0c5b0" }
  },
  {
    title: "Prediction Markets? The Accuracy and Efficiency of Political Prediction Markets in the 2024 Presidential Election",
    authors: "Joshua D. Clinton, TzuFeng Huang",
    venue: "", year: 2026, type: "working", featured: false,
    status: "Working paper",
    topics: ["elections", "polling", "data science"],
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
    abstract: "I test the Separation of Powers and Attitudinal models of judicial decision making by asking how far the Supreme Court’s statutory interpretation from 1953 to 1995 responds to congressional and presidential preferences, using a game-theoretic framework and a method that places the Court and the elected bodies on a comparable scale. I find scant support for the Separation of Powers model.",
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
    abstract: "A case study of how attrition and panel conditioning bias estimates from the Knowledge Networks internet survey panel, and what that implies for inference from online panels.",
    links: { pdf: "assets/papers/C_WP2001.pdf" }
  },
  {
    title: "Strategically Speaking: A New Analysis of Presidents Going Public",
    authors: "Joshua D. Clinton, David E. Lewis, Stephanie K. Riegg, Barry R. Weingast",
    venue: "", year: 1999, type: "unpublished", featured: false,
    status: "1999",
    topics: ["public opinion", "Congress"],
    note: "Possibly the only paper Barry Weingast never published. It earned a revise-and-resubmit at the Journal of Politics that we did not think we could convert.",
    abstract: "A new analysis of when and why presidents “go public,” appealing directly to citizens to pressure Congress rather than bargaining privately.",
    links: { pdf: "assets/papers/CLRW_WP1999.pdf" }
  },
  {
    title: "Characterizing Chief Executives: Comparing Presidential and Congressional Preferences and Their Effect on Lawmaking, Agency Budgeting, and Unilateral Executive Action, 1874–2010",
    authors: "Joshua D. Clinton, Molly C. Jackman, Saul P. Jackman",
    venue: "", year: 2013, type: "unpublished", featured: false,
    status: "2013",
    topics: ["Congress", "methodology"],
    award: "Winner, 2014 Patrick J. Fett Award for the best paper on Congress and the Presidency at the 2013 MPSA.",
    abstract: "Comparing executive and legislative preferences is hard because the actors do not take positions on the same issues. We propose a new measure of the president’s ideal point from vote returns and use it to compare presidential and congressional preferences and their effects on lawmaking, agency budgeting, and unilateral executive action from 1874 to 2010.",
    links: { pdf: "assets/papers/CJJ_WP2013.pdf" }
  },
  {
    title: "Oversight, Accountability, and Constituency Ignorance",
    authors: "Joshua D. Clinton, Jeff Tessin",
    venue: "", year: 2008, type: "unpublished", featured: false,
    status: "2008",
    topics: ["Congress", "public opinion"],
    abstract: "Using an original survey of nearly 13,000 respondents, we ask whether third parties indirectly educate constituents about congressional disagreements. Contrary to accounts of indirect oversight, disagreement between representatives and their constituents has only a small effect on what constituents know about prominent House votes.",
    links: { pdf: "assets/papers/CT_WP2008.pdf" }
  },
  {
    title: "Empirical Probability Scales for Verbal Expectations Data, with Application to Expectations of Job Loss",
    authors: "Joshua D. Clinton, Charles F. Manski",
    venue: "", year: 2002, type: "unpublished", featured: false,
    status: "2002",
    topics: ["methodology", "public opinion"],
    note: "An early collaboration with the econometrician Charles Manski on measuring subjective expectations.",
    abstract: "A method for turning verbal expectation responses into empirical probability scales, applied to survey respondents’ expectations of losing their job.",
    links: { pdf: "assets/papers/CM_WP2002.pdf" }
  },

  /* ===================== REFEREED ARTICLES ===================== */
  {
    title: "Improving Small-Area Estimates of Public Opinion by Calibrating to Known Population Quantities",
    authors: "Joshua D. Clinton, Will Marble",
    venue: "Political Analysis", year: 2026, type: "article", featured: true,
    topics: ["methodology", "public opinion", "data science"],
    links: { pdf: "assets/papers/MC_MRPCalibration.pdf", doi: "https://doi.org/10.1017/pan.2026.10044" }
  },
  {
    title: "Procedural Polarization: How Election Rules Shape Voters’ Confidence",
    authors: "Joshua D. Clinton",
    venue: "American Political Science Review", year: 2026, type: "article", featured: true,
    topics: ["elections", "public opinion"],
    abstract: "Leveraging growing procedural polarization in election law, opinion data from 2008 to 2024, and a large survey experiment before the 2024 election, I show that agreement with election procedures shapes voter confidence beyond the well-established effects of partisan control and electoral outcomes.",
    links: { pdf: "assets/papers/C_APSR2026.pdf", doi: "https://doi.org/10.1017/S000305542610166X" }
  },
  {
    title: "Contingent Confidence: The Effect of the 2024 Election Outcome on Public and Elite Confidence in National Elections",
    authors: "Joshua D. Clinton",
    venue: "PS: Political Science & Politics", year: 2026, type: "article", featured: false,
    topics: ["elections", "public opinion", "polling"],
    abstract: "Using a rolling cross-section of 54,000 voters, a panel of 6,000, and surveys of 1,400 local elites, I trace how confidence in national elections shifted with the projected election of President Trump: Republican confidence rose sharply while Democratic confidence fell, converging by mid-December.",
    links: { pdf: "assets/papers/C_PS2026.pdf", doi: "https://doi.org/10.1017/S1049096525101662" }
  },
  {
    title: "Donors and Dollars: Comparing the Policy Views of Donors and the Affluent",
    authors: "Joshua D. Clinton, Michael Barber, Brandice Canes-Wrone, Gregory A. Huber",
    venue: "Journal of Politics", year: 2026, type: "article", featured: false,
    topics: ["elections", "public opinion"],
    abstract: "Surveying verified 2017–2018 donors, affluent individuals, and the general public, we find donors in both parties hold more ideologically extreme domestic-policy views than either the affluent or the public, differences not explained by demographics or political interest.",
    links: { pdf: "assets/papers/BCWCH_JOP2026.pdf", doi: "https://doi.org/10.1086/736337" }
  },
  {
    title: "Which Republican Constituencies Support Restrictive Abortion Laws? Comparisons among Donors, Wealthy, and Mass Publics",
    authors: "Joshua D. Clinton, Michael Barber, Brandice Canes-Wrone, Gregory A. Huber",
    venue: "Public Opinion Quarterly", year: 2025, type: "article", featured: false,
    topics: ["public opinion", "elections"],
    abstract: "Comparing donors, the wealthy, and the mass public, we examine which Republican constituencies back restrictive abortion laws and how donor preferences diverge from those of co-partisans.",
    links: { pdf: "assets/papers/BCCWH_POQ.pdf", doi: "https://doi.org/10.1093/poq/nfaf012" }
  },
  {
    title: "Synthetic Replacements for Human Survey Data? The Perils of Large Language Models",
    authors: "Joshua D. Clinton, Jim Bisbee, Cassy Dorff, Brenton Kenkel, Jennifer Larson",
    venue: "Political Analysis", year: 2024, type: "article", featured: true,
    topics: ["methodology", "data science", "public opinion"],
    abstract: "We test how well ChatGPT recovers public opinion by prompting it to adopt personas and rate sociopolitical groups. Averages track the ANES, but synthetic samples show too little variation for reliable inference and coefficients often diverge from survey-based estimates.",
    links: { pdf: "assets/papers/BCDKL_PA2024.pdf", doi: "https://doi.org/10.1017/pan.2024.5" }
  },
  {
    title: "Giving to the Extreme? Experimental Evidence on Donor Response to Candidate and District Characteristics",
    authors: "Joshua D. Clinton, Mellissa Meisels, Gregory A. Huber",
    venue: "British Journal of Political Science", year: 2024, type: "article", featured: false,
    topics: ["elections", "public opinion"],
    abstract: "Using experimental vignettes administered to 7,000 verified midterm donors, we show ideological congruence, district competitiveness, and opponent extremity all shape contribution decisions, with an asymmetric penalty against more moderate candidates.",
    links: { pdf: "assets/papers/MCH_BJPS2024.pdf", doi: "https://doi.org/10.1017/s0007123423000650" }
  },
  {
    title: "Protecting the Integrity of Survey Research",
    authors: "Joshua D. Clinton, Kathleen Hall Jamieson, Arthur Lupia, et al.",
    venue: "PNAS Nexus", year: 2023, type: "article", featured: false,
    topics: ["polling", "methodology"],
    links: { doi: "https://doi.org/10.1093/pnasnexus/pgad049" }
  },
  {
    title: "Reluctant Republicans, Eager Democrats?",
    authors: "Joshua D. Clinton, John S. Lapinski, Marc J. Trussler",
    venue: "Public Opinion Quarterly", year: 2022, type: "article", featured: false,
    topics: ["polling", "elections"],
    links: { doi: "https://doi.org/10.1093/poq/nfac011" }
  },
  {
    title: "Trumped by Trump? Public Support for Mail Voting in Response to the COVID-19 Pandemic",
    authors: "Joshua D. Clinton, John S. Lapinski, Sarah Lentz, Stephen Pettigrew",
    venue: "Election Law Journal", year: 2022, type: "article", featured: false,
    topics: ["elections", "public opinion"],
    links: { pdf: "assets/papers/CLLP_COVIDVBM.pdf", doi: "https://doi.org/10.1089/elj.2020.0671" }
  },
  {
    title: "Partisan Pandemic: How Partisanship and Public Health Concerns Affect Individuals’ Social Mobility During COVID-19",
    authors: "Joshua D. Clinton, Jon Cohen, John S. Lapinski, Marc J. Trussler",
    venue: "Science Advances", year: 2020, type: "article", featured: false,
    topics: ["public opinion"],
    links: { pdf: "assets/papers/CCLT_PIDCOVID_PREPRINT.pdf", doi: "https://doi.org/10.1126/sciadv.abd7204" }
  },
  {
    title: "The Effect of Big-City News on Rural America During the COVID-19 Pandemic",
    authors: "Joshua D. Clinton, Eunji Kim, Michael E. Shepherd",
    venue: "Proceedings of the National Academy of Sciences", year: 2020, type: "article", featured: false,
    topics: ["public opinion"],
    links: { pdf: "assets/papers/KSC_PNAS_Market Matters_Manuscript.pdf", doi: "https://doi.org/10.1073/pnas.2009384117" }
  },
  {
    title: "The Politics of Locating Polling Places: Race and Partisanship in North Carolina Election Administration, 2008–2016",
    authors: "Joshua D. Clinton, Adriane Fresh, Nick Eubank, Michael E. Shepherd",
    venue: "Election Law Journal", year: 2020, type: "article", featured: false,
    topics: ["elections"],
    abstract: "Using the near-universe of eligible voters, polling places, and precinct boundaries across three presidential elections, we find no evidence that local administrators allocate polling places in a manner consistent with partisan or racial manipulation.",
    links: { pdf: "assets/papers/SFEC_ELJ_PoliticsOfPollingPlaces.pdf", doi: "https://doi.org/10.1089/elj.2019.0602" }
  },
  {
    title: "Polling Place Changes and Political Participation: Evidence from North Carolina Presidential Elections, 2008–2016",
    authors: "Joshua D. Clinton, Adriane Fresh, Nick Eubank, Michael E. Shepherd",
    venue: "Political Science Research & Methods", year: 2020, type: "article", featured: false,
    topics: ["elections"],
    abstract: "Studying more than 2 million eligible voters across three presidential elections, we show polling-place changes reduce Election Day voting on average, an effect almost fully offset by substitution into early voting.",
    links: { pdf: "assets/papers/CEFS_PSRM_PPChangeAndParticipation.pdf", doi: "https://doi.org/10.1017/psrm.2020.43" }
  },
  {
    title: "Policy Effects, Partisanship, and Elections: How Medicaid Expansion Affected Public Opinion toward the Affordable Care Act",
    authors: "Joshua D. Clinton, Michael W. Sances",
    venue: "Journal of Politics", year: 2020, type: "article", featured: false,
    topics: ["public opinion", "elections"],
    abstract: "Using varied implementation of Medicaid expansion and nearly 300,000 responses in a difference-in-differences design, we find expansion made respondents modestly more positive toward the ACA and less likely to support repeal, with effects strongest among those most likely to be affected.",
    links: { pdf: "assets/papers/SancesClintonAJPS_2021.pdf", doi: "https://doi.org/10.1086/710085" }
  },
  {
    title: "The Effect of Majority Party Agenda Setting on Roll Calls",
    authors: "Joshua D. Clinton",
    venue: "Public Choice", year: 2020, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    links: { doi: "https://doi.org/10.1007/s11127-019-00706-3" }
  },
  {
    title: "Who Participated in the ACA? Gains in Insurance Coverage by Political Partisanship",
    authors: "Joshua D. Clinton, Michael W. Sances",
    venue: "Journal of Health Politics, Policy and Law", year: 2019, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "Combining geographic and temporal variation in ACA implementation with county- and individual-level data, we reject the hypothesis that Democratic voters saw larger coverage gains; increases were made similarly across the political spectrum.",
    links: { pdf: "assets/papers/SC_JHPPL.pdf", doi: "https://doi.org/10.1215/03616878-7366988" }
  },
  {
    title: "Knockout Blows or the Status Quo? Momentum in the 2016 Primaries",
    authors: "Joshua D. Clinton, Andrew M. Engelhardt, Marc J. Trussler",
    venue: "Journal of Politics", year: 2019, type: "article", featured: false,
    topics: ["elections", "polling", "public opinion"],
    abstract: "Defining momentum as the effect of election outcomes on candidate support beyond existing trends, and using a rolling cross-section of more than 325,000 interviews, we find scant evidence that 2016 primary outcomes uniquely shaped preferences.",
    links: { pdf: "assets/papers/CET_JOP2019.pdf", doi: "https://doi.org/10.1086/703383" }
  },
  {
    title: "Lawmaking in American Legislatures: An Empirical Investigation",
    authors: "Joshua D. Clinton, Mark D. Richardson",
    venue: "Journal of Public Policy", year: 2019, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Using several measures of state policy outcomes, we argue for simulation studies to connect theory to specification, and find state lawmaking most consistent with models emphasizing the chamber median and the governor.",
    links: { pdf: "assets/papers/CR_JPP2016.pdf", doi: "https://doi.org/10.1017/s0143814x17000265" }
  },
  {
    title: "The Politics of Policy: The Initial Mass Political Effects of Medicaid Expansion in the States",
    authors: "Joshua D. Clinton, Michael W. Sances",
    venue: "American Political Science Review", year: 2018, type: "article", featured: true,
    topics: ["public opinion", "elections"],
    abstract: "Exploiting cross-state variation from NFIB v. Sebelius, we compare registration and turnout after Medicaid expansion and find higher participation in expansion states, concentrated where the most residents were eligible, with effects on registration persisting through 2016.",
    links: { pdf: "assets/papers/CS_APSR2018.pdf", doi: "https://doi.org/10.1017/s0003055417000430" }
  },
  {
    title: "An Evaluation of the 2016 Election Polls in the United States: AAPOR Task Force Report",
    authors: "Joshua D. Clinton, Courtney Kennedy, et al. (AAPOR Task Force)",
    venue: "Public Opinion Quarterly", year: 2018, type: "article", featured: false,
    topics: ["polling", "elections"],
    abstract: "The AAPOR task-force evaluation of the 2016 U.S. election polls, their accuracy, and the sources of error.",
    links: { pdf: "assets/papers/AAPOR-2016-Election-Polling-Report.pdf", doi: "https://doi.org/10.1093/poq/nfx047" }
  },
  {
    title: "Elite Perceptions of Agency Ideology and Workforce Skill",
    authors: "Joshua D. Clinton, David E. Lewis, Mark D. Richardson",
    venue: "Journal of Politics", year: 2018, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Using a survey of federal executives, we measure perceived ideological leanings for twice as many agencies as previously possible and develop a new measure of perceived workforce skill.",
    links: { pdf: "assets/papers/RCL_JOP2017.pdf", doi: "https://doi.org/10.1086/694846" }
  },
  {
    title: "Changing Owners, Changing Content: Does Who Owns the News Matter for the News?",
    authors: "Joshua D. Clinton, Allison Archer",
    venue: "Political Communication", year: 2018, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "We examine whether changes in ownership affect the content of the news.",
    links: { pdf: "assets/papers/AC_PC2017.pdf", doi: "https://doi.org/10.1080/10584609.2017.1375581" }
  },
  {
    title: "Coding the Ideological Direction and Content of Policies",
    authors: "Joshua D. Clinton",
    venue: "Annual Review of Political Science", year: 2017, type: "article", featured: true,
    topics: ["methodology", "Congress"],
    abstract: "A review of data-driven and model-driven approaches to characterizing the content and direction of policy, highlighting the limitations scholars continue to face.",
    links: { pdf: "assets/papers/C_AR2017.pdf", doi: "https://doi.org/10.1146/annurev-polisci-062615-031524" }
  },
  {
    title: "A House Divided? Roll Calls, Polarization, and Policy Differences in the U.S. House, 1877–2011",
    authors: "Joshua D. Clinton, David A. Bateman, John S. Lapinski",
    venue: "American Journal of Political Science", year: 2017, type: "article", featured: true,
    topics: ["Congress", "methodology"],
    abstract: "Focusing on civil rights since Reconstruction, we show that incorporating the policies being voted upon yields a starkly different portrait of elite conflict: contemporary parties are less divided than commonly thought, with conflict in a smaller, more liberal region of the policy space.",
    links: { pdf: "assets/papers/BCL_AJPS2016.pdf", doi: "https://doi.org/10.1111/ajps.12281" }
  },
  {
    title: "Assessing the Variation of Formal Military Alliances in the International System, 1816–2000",
    authors: "Joshua D. Clinton, Brett Benson",
    venue: "Journal of Conflict Resolution", year: 2016, type: "article", featured: false,
    topics: ["methodology"],
    abstract: "We show how a Bayesian measurement model can estimate the scope, depth, and potential military capacity of formal alliances signed between 1816 and 2000, and use the estimates to revisit core intuitions about alliance formation.",
    links: { pdf: "assets/papers/BC_JCR2014.pdf", doi: "https://doi.org/10.1177/0022002714560348" }
  },
  {
    title: "Public Information, Public Learning, and Public Opinion: Democratic Accountability in Education Policy",
    authors: "Joshua D. Clinton, Jason Grissom",
    venue: "Journal of Public Policy", year: 2015, type: "article", featured: false,
    topics: ["public opinion"],
    abstract: "We examine how public information shapes learning and opinion in education policy and what that implies for bottom-up democratic accountability.",
    links: { pdf: "assets/papers/CG_JPP2015.pdf", doi: "https://doi.org/10.1017/s0143814x14000312" }
  },
  {
    title: "The National News Media’s Effect on Congress: How Fox News Affected Elites in Congress",
    authors: "Joshua D. Clinton, Ted Enamorado",
    venue: "Journal of Politics", year: 2014, type: "article", featured: false,
    topics: ["Congress", "public opinion"],
    abstract: "Using the gradual post-1996 spread of Fox News across districts, we show representatives became less supportive of President Clinton where Fox News began broadcasting, with effects realized over several years.",
    links: { pdf: "assets/papers/CE_JOP2014.pdf", doi: "https://doi.org/10.1017/s0022381614000425" }
  },
  {
    title: "Influencing the Bureaucracy: The Irony of Congressional Oversight",
    authors: "Joshua D. Clinton, David Lewis, Jen Selin",
    venue: "American Journal of Political Science", year: 2014, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Using a survey of federal executives to place agencies, committees, and the president on a comparable scale, we find Congress is less influential relative to the White House when more committees are involved.",
    links: { pdf: "assets/papers/CLS_AJPS2014.pdf", doi: "https://doi.org/10.1111/ajps.12066" }
  },
  {
    title: "Robo-Polls: Taking Cues from Traditional Sources?",
    authors: "Joshua D. Clinton, Steve Rogers",
    venue: "PS: Political Science & Politics", year: 2013, type: "article", featured: false,
    topics: ["polling", "elections"],
    abstract: "Evaluating 159 polls from the 2012 Republican primaries, we find no overall accuracy difference between IVR and human polls, but IVR polls conducted after human polls are significantly poorer predictors, suggesting pollsters may take cues from one another.",
    links: { pdf: "assets/papers/CR_PS2013.pdf", doi: "https://doi.org/10.1017/s1049096513000012" }
  },
  {
    title: "Congress, Lawmaking, and the Fair Labor Standards Act, 1971–2000",
    authors: "Joshua D. Clinton",
    venue: "American Journal of Political Science", year: 2012, type: "article", featured: false,
    topics: ["Congress"],
    links: { doi: "https://doi.org/10.1111/j.1540-5907.2011.00547.x" }
  },
  {
    title: "Separated Powers in the United States: The Ideology of Agencies, Presidents, and Congress",
    authors: "Joshua D. Clinton, Anthony Bertelli, Christian Grose, David Lewis, David Nixon",
    venue: "American Journal of Political Science", year: 2012, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    links: { doi: "https://doi.org/10.1111/j.1540-5907.2011.00559.x" }
  },
  {
    title: "Using Roll Call Estimates to Test Models of Politics",
    authors: "Joshua D. Clinton",
    venue: "Annual Review of Political Science", year: 2012, type: "article", featured: true,
    topics: ["methodology", "Congress"],
    abstract: "Measuring elite preferences from roll-call votes is appealing, but because ideal points result from applying a statistical model to a model of choice, their usefulness for testing theories of politics is not automatic. A review of what roll-call estimates can and cannot support.",
    links: { pdf: "assets/papers/C_AR2012.pdf", doi: "https://doi.org/10.1146/annurev-polisci-043010-095836" }
  },
  {
    title: "More a Molehill than a Mountain: The Effects of the Blanket Primary on Elected Officials’ Behavior from California",
    authors: "Joshua D. Clinton, Will Bullock",
    venue: "Journal of Politics", year: 2011, type: "article", featured: false,
    topics: ["elections", "Congress"],
    award: "Winner, 2011 Journal of Politics Best Paper Award.",
    links: { doi: "https://doi.org/10.1017/s0022381611000557" }
  },
  {
    title: "To Simulate or NOMINATE?",
    authors: "Joshua D. Clinton, Simon Jackman",
    venue: "Legislative Studies Quarterly", year: 2009, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Comparing NOMINATE and Bayesian quadratic-normal approaches to ideal-point estimation, we argue the more flexible Bayesian approach is generally preferable for the broad array of questions it can address.",
    links: { pdf: "assets/papers/CJ_LSQ2009.pdf", doi: "https://doi.org/10.3162/036298009789869691" }
  },
  {
    title: "Laws and Roll Calls in the U.S. Congress, 1891–1994",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "Legislative Studies Quarterly", year: 2008, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Because only a small share of enacted statutes ever receive a recorded vote, we question the assumption that roll-call activity reflects lawmaking activity and offer guidance on when voting behavior is a reasonable proxy.",
    links: { pdf: "assets/papers/CL_LSQ2008.pdf", doi: "https://doi.org/10.3162/036298008786403097" }
  },
  {
    title: "Design, Inference, and the Strategic Logic of Suicide Terrorism",
    authors: "Joshua D. Clinton, Scott Ashworth, Adam Meirowitz, Kristopher W. Ramsay",
    venue: "American Political Science Review", year: 2008, type: "article", featured: false,
    topics: ["methodology"],
    abstract: "We show that Pape’s suicide-terrorism data cannot support his conclusions because they sample on the dependent variable, and we construct bounds showing how little can be learned about the relevant associations from that research design.",
    links: { pdf: "assets/papers/ACMR2008.pdf", doi: "https://doi.org/10.1017/s0003055408080167" }
  },
  {
    title: "Expert Opinion, Agency Characteristics, and Agency Preferences",
    authors: "Joshua D. Clinton, David E. Lewis",
    venue: "Political Analysis", year: 2008, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "We propose a multirater item-response method for measuring the policy preferences of 82 executive agencies, combining subjective expert ratings with objective agency characteristics.",
    links: { pdf: "assets/papers/CL_PA2007.pdf", doi: "https://doi.org/10.1093/pan/mpm009" }
  },
  {
    title: "Lawmaking and Roll Calls",
    authors: "Joshua D. Clinton",
    venue: "Journal of Politics", year: 2007, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Embedding the predictions of party-gatekeeping and veto-pivot theories within a statistical ideal-point model yields a direct test; implementing it reveals little support for either theory.",
    links: { pdf: "assets/papers/C_JOP2007.pdf", doi: "https://doi.org/10.1111/j.1468-2508.2007.00543.x" }
  },
  {
    title: "Does Advertising Exposure Affect Turnout?",
    authors: "Joshua D. Clinton, Scott Ashworth",
    venue: "Quarterly Journal of Political Science", year: 2007, type: "article", featured: false,
    topics: ["elections"],
    abstract: "Using residence in battleground states as an exogenous source of variation in 2000 campaign-ad exposure, we find no evidence that exposure significantly increased turnout, a result robust across specifications.",
    links: { pdf: "assets/papers/AC_QJPS2007.pdf", doi: "https://doi.org/10.1561/100.00005051" }
  },
  {
    title: "Representation in Congress: Constituents and Roll Calls in the 106th House",
    authors: "Joshua D. Clinton",
    venue: "Journal of Politics", year: 2006, type: "article", featured: true,
    topics: ["Congress", "public opinion"],
    abstract: "Aggregating 100,814 respondents to measure subconstituency preferences, I show representatives are not fully responsive to the district mean, and that only majority-party Republicans are especially responsive to same-party constituents.",
    links: { pdf: "assets/papers/C_JOP2006.pdf", doi: "https://doi.org/10.1111/j.1468-2508.2006.00415.x" }
  },
  {
    title: "Measuring Legislative Accomplishment, 1877–1994",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "American Journal of Political Science", year: 2006, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Combining item-response theory with a dataset of every public statute enacted between 1877 and 1994, we estimate legislative significance across time, providing new opportunities to analyze U.S. policymaking since 1877.",
    links: { pdf: "assets/papers/CL_AJPS2006.pdf", doi: "https://doi.org/10.1111/j.1540-5907.2006.00181.x" }
  },
  {
    title: "The Statistical Analysis of Roll Call Data",
    authors: "Joshua D. Clinton, Simon Jackman, Doug Rivers",
    venue: "American Political Science Review", year: 2004, type: "article", featured: true,
    topics: ["methodology", "Congress"],
    abstract: "We develop a flexible Bayesian procedure for estimation and inference in spatial models of roll-call voting, applicable to any legislative setting and extensible to incorporate party whipping, agenda evolution, and the determinants of preferences.",
    links: { pdf: "assets/papers/CJR_APSR2004.pdf", doi: "https://doi.org/10.1017/s0003055404001194" }
  },
  {
    title: "Testing Explanations of Strategic Voting in Legislatures: A Reexamination of the Compromise of 1790",
    authors: "Joshua D. Clinton, Adam Meirowitz",
    venue: "American Journal of Political Science", year: 2004, type: "article", featured: false,
    topics: ["Congress", "methodology"],
    award: "Winner, 2002 Robert H. Durr Award.",
    abstract: "We present a method that unifies theory, history, and measurement, then use first-Congress voting data to subject the traditional account of the Compromise of 1790 to a statistical test, finding reason to doubt it.",
    links: { pdf: "assets/papers/CM_AJPS2004.pdf", doi: "https://doi.org/10.1111/j.0092-5853.2004..x" }
  },
  {
    title: "‘Targeted’ Advertising and Voter Turnout: An Experimental Study of the 2000 Presidential Election",
    authors: "Joshua D. Clinton, John Lapinski",
    venue: "Journal of Politics", year: 2004, type: "article", featured: false,
    topics: ["elections"],
    abstract: "In an experiment with more than 10,200 eligible voters, we find no evidence that negative advertising decreases turnout; any effect depends on the message and the viewer.",
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
    abstract: "We argue theory and methods are better integrated by embedding maintained and tested hypotheses directly in the statistical model used to estimate legislator preferences, demonstrated on the Powell amendment.",
    links: { pdf: "assets/papers/CM_PA2003.pdf", doi: "https://doi.org/10.1093/pan/mpg023" }
  },
  {
    title: "Agenda Constrained Legislator Ideal Points and the Spatial Voting Model",
    authors: "Joshua D. Clinton, Adam Meirowitz",
    venue: "Political Analysis", year: 2001, type: "article", featured: false,
    topics: ["methodology", "Congress"],
    abstract: "Existing preference-estimation procedures ignore the sequential structure of the agenda; we show how using it improves identification and the recovery of proposal and preference locations.",
    links: { pdf: "assets/papers/CM_PA2001.pdf", doi: "https://doi.org/10.1093/polana/9.3.242" }
  },

  /* ===================== BOOK CHAPTERS ===================== */
  {
    title: "Public Opinion in the Age of AI",
    authors: "Joshua D. Clinton (Chair), Soubhik Barari, Ethan Busby, Trent D. Buskirk, Raymond Duch, Anna-Carolina Haensch, D. Sunshine Hillygus, Courtney Kennedy, Kevin Munger, Douglas Rivers, Sean Westwood",
    venue: "APSA Task Force on Artificial Intelligence; in Artificial Intelligence, Politics and Political Science (Persily & Tucker, eds.), Cambridge University Press",
    year: 2026, type: "chapter", featured: false,
    topics: ["polling", "public opinion", "data science"],
    abstract: "A report of the APSA Task Force on Artificial Intelligence, chaired by Clinton, on what artificial intelligence means for the measurement and interpretation of public opinion.",
    links: { pdf: "assets/papers/Cetal_APSAPublicOpinion2026.docx.pdf", doi: "https://preprints.apsanet.org/engage/apsa/article-details/69fcc22b810b9dcc82e24669" }
  },
  {
    title: "Roll Calls, Voting Coalitions, and Possible Agenda Control in the U.S. House of Representatives, 1869–2024",
    authors: "Joshua D. Clinton",
    venue: "in Causal Inference and American Political Development (Jenkins, ed.), Springer",
    year: 2024, type: "chapter", featured: false,
    topics: ["Congress", "methodology"],
    abstract: "Using fixed effects and members serving in consecutive Congresses, I isolate the effect of a changing agenda from compositional change to ask how well roll calls detect majority-party agenda setting.",
    links: { pdf: "assets/papers/Clinton2024_PublicChoiceRevised.pdf", doi: "https://doi.org/10.1007/978-3-031-74913-1_12" }
  },
  {
    title: "The Importance of Issue Representation in a Polarized Congress",
    authors: "Joshua D. Clinton, Michael W. Sances, Mary Catherine Sullivan",
    venue: "in Accountability Reconsidered (Cameron, Canes-Wrone, Gordon & Huber, eds.), Cambridge University Press",
    year: 2022, type: "chapter", featured: false,
    topics: ["Congress", "public opinion"],
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
    abstract: "An essay on political representation for the Oxford Handbook of American Political Development.",
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
