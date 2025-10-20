/**
 * @file UI translation interface definitions
 */

import type { UiLayoutTranslations } from "./ui-layout-translations";
import type { UiFormTranslations } from "./ui-form-translations";
import type { UiMessageTranslations } from "./ui-message-translations";
import type { UiAccessibilityTranslations } from "./ui-accessibility-translations";

export interface UiTranslations
  extends UiLayoutTranslations,
    UiFormTranslations,
    UiMessageTranslations,
    UiAccessibilityTranslations {}
