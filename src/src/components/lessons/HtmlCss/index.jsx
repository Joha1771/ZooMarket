// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT — PhaseContent map for HTML/CSS module
// ═══════════════════════════════════════════════════════════════════════════════

import { BoxModelExplain, BoxModelLearn } from "./Content/BoxModel";
import { FlexboxExplain, FlexboxLearn } from "./Content/FlexBox";
import { HowWebWorksExplain, HowWebWorksLearn } from "./Content/HowWebWorks";
import { HtmlBasicsExplain, HtmlBasicsLearn } from "./Content/HtmlBasics";
import { TextLinksExplain } from "./Content/TextLinksImages";
import { FormsTablesExplain } from "./Content/FormsTables";
import { SemanticHtmlExplain } from "./Content/SemanticHtml";
import { CssIntroExplain } from "./Content/CssIntro";
import { ColorsFontsExplain } from "./Content/ColorsFonts";
import { CssGridExplain } from "./Content/CssGrid";
import { GithubExplain } from "./Content/Github";
import { ProjectLandingExplain } from "./Content/ProjectLanding";
import { QUIZZES, STARTERS, HTML_CSS_CONTENT_KEYS } from "./Data/Data";

export function HtmlCssPhaseContent({ lessonId, phaseId, t }) {
  const map = {
    "how-web-works": {
      explain: <HowWebWorksExplain />,
      learn: <HowWebWorksLearn />,
    },
    "html-basics": {
      explain: <HtmlBasicsExplain />,
      learn: <HtmlBasicsLearn />,
    },
    "text-links-img": {
      explain: <TextLinksExplain />,
      learn: <TextLinksExplain />,
    },
    "forms-tables": {
      explain: <FormsTablesExplain />,
      learn: <FormsTablesExplain />,
    },
    "semantic-html": {
      explain: <SemanticHtmlExplain />,
      learn: <SemanticHtmlExplain />,
    },
    "css-intro": { explain: <CssIntroExplain />, learn: <CssIntroExplain /> },
    "colors-fonts": {
      explain: <ColorsFontsExplain />,
      learn: <ColorsFontsExplain />,
    },
    "box-model": {
      explain: <BoxModelExplain t={t} />,
      learn: <BoxModelLearn t={t} />,
    },
    flexbox: {
      explain: <FlexboxExplain t={t} />,
      learn: <FlexboxLearn t={t} />,
    },
    grid: { explain: <CssGridExplain />, learn: <CssGridExplain /> },
    github: { explain: <GithubExplain />, learn: <GithubExplain /> },
    "project-landing": {
      explain: <ProjectLandingExplain />,
      learn: <ProjectLandingExplain />,
    },
  };
  return map[lessonId]?.[phaseId] ?? null;
}

export function getHtmlCssStarter(lessonId) {
  return STARTERS[lessonId] || null;
}

export function getHtmlCssQuiz(lessonId) {
  return QUIZZES[lessonId] || null;
}

export { HTML_CSS_CONTENT_KEYS };
