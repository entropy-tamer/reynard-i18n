/**
 * @file IntlDateFormatter class for date formatting
 */

import type { IntlConfig } from "../../intl/IntlConfig";

/**
 * IntlDateFormatter class for locale-aware date formatting
 *
 * Provides various date formatting methods using the Intl.DateTimeFormat API
 * with support for different locales, time zones, and formatting styles.
 *
 * @example
 * ```typescript
 * const formatter = new IntlDateFormatter({
 *   locale: 'en-US',
 *   timeZone: 'America/New_York'
 * });
 * const formatted = formatter.formatShort(new Date());
 * console.log(formatted); // "12/31/2023"
 * ```
 */
export class IntlDateFormatter {
  /**
   * Creates a new IntlDateFormatter instance
   * @param config - Internationalization configuration including locale and timezone
   * @example
   * ```typescript
   * const formatter = new IntlDateFormatter({
   *   locale: 'en-US',
   *   timeZone: 'America/New_York'
   * });
   * ```
   */
  constructor(private config: IntlConfig) {}

  /**
   * Formats a date with custom options
   * @param date - The date to format
   * @param options - Optional Intl.DateTimeFormatOptions for custom formatting
   * @returns Formatted date string
   * @example
   * ```typescript
   * const date = new Date('2023-12-31');
   * const formatted = formatter.format(date, {
   *   year: 'numeric',
   *   month: 'long',
   *   day: 'numeric'
   * });
   * console.log(formatted); // "December 31, 2023"
   * ```
   */
  format(date: Date, options?: Intl.DateTimeFormatOptions): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      timeZone: this.config.timeZone,
      ...options,
    });
    return formatter.format(date);
  }

  /**
   * Formats a date in short style (e.g., "12/31/2023")
   * @param date - The date to format
   * @returns Short formatted date string
   * @example
   * ```typescript
   * const date = new Date('2023-12-31');
   * const formatted = formatter.formatShort(date);
   * console.log(formatted); // "12/31/2023"
   * ```
   */
  formatShort(date: Date): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      dateStyle: "short",
      timeZone: this.config.timeZone,
    });
    return formatter.format(date);
  }

  /**
   * Formats a date in medium style (e.g., "Dec 31, 2023")
   * @param date - The date to format
   * @returns Medium formatted date string
   */
  formatMedium(date: Date): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      dateStyle: "medium",
      timeZone: this.config.timeZone,
    });
    return formatter.format(date);
  }

  /**
   * Formats a date in long style (e.g., "December 31, 2023")
   * @param date - The date to format
   * @returns Long formatted date string
   */
  formatLong(date: Date): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      dateStyle: "long",
      timeZone: this.config.timeZone,
    });
    return formatter.format(date);
  }

  /**
   * Formats a date in full style (e.g., "Sunday, December 31, 2023")
   * @param date - The date to format
   * @returns Full formatted date string
   */
  formatFull(date: Date): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      dateStyle: "full",
      timeZone: this.config.timeZone,
    });
    return formatter.format(date);
  }

  /**
   * Formats only the time portion of a date (e.g., "2:30 PM")
   * @param date - The date to format
   * @returns Formatted time string
   */
  formatTime(date: Date): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      timeStyle: "short",
      timeZone: this.config.timeZone,
    });
    return formatter.format(date);
  }

  /**
   * Formats both date and time in short style (e.g., "12/31/2023, 2:30 PM")
   * @param date - The date to format
   * @returns Formatted date and time string
   * @example
   * ```typescript
   * const date = new Date('2023-12-31T14:30:00');
   * const formatted = formatter.formatDateTime(date);
   * console.log(formatted); // "12/31/2023, 2:30 PM"
   * ```
   */
  formatDateTime(date: Date): string {
    const formatter = new Intl.DateTimeFormat(this.config.locale, {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: this.config.timeZone,
    });
    return formatter.format(date);
  }
}
