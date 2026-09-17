import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { formatRelativeTime } from "~/shared/utils/format-relative-time";

const NOW = new Date("2024-06-15T12:00:00.000Z");

function minutesAgo(minutes: number) {
	return new Date(NOW.getTime() - minutes * 60 * 1000).toISOString();
}

function hoursAgo(hours: number) {
	return new Date(NOW.getTime() - hours * 60 * 60 * 1000).toISOString();
}

function daysAgo(days: number) {
	return new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000).toISOString();
}

function daysFromNow(days: number) {
	return new Date(NOW.getTime() + days * 24 * 60 * 60 * 1000).toISOString();
}

describe("formatRelativeTime", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(NOW);
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("retorna 'agora' para o instante atual", () => {
		expect(formatRelativeTime(NOW.toISOString())).toBe("agora");
	});

	it("formata minutos atrás", () => {
		expect(formatRelativeTime(minutesAgo(5))).toBe("há 5 minutos");
	});

	it("formata horas atrás", () => {
		expect(formatRelativeTime(hoursAgo(2))).toBe("há 2 horas");
	});

	it("formata dias atrás", () => {
		expect(formatRelativeTime(daysAgo(3))).toBe("há 3 dias");
	});

	it("formata exatamente uma semana atrás", () => {
		expect(formatRelativeTime(daysAgo(7))).toBe("semana passada");
	});

	it("formata datas muito antigas em anos", () => {
		expect(formatRelativeTime(daysAgo(365 * 5))).toContain("anos");
	});

	it("formata datas futuras", () => {
		expect(formatRelativeTime(daysFromNow(1))).toBe("amanhã");
	});
});
