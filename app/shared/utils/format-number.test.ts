import { describe, expect, it } from "vitest";

import { formatNumber } from "~/shared/utils/format-number";

describe("formatNumber", () => {
	it("formata milhares com separador de ponto (pt-BR)", () => {
		expect(formatNumber(1_000)).toBe("1.000");
	});

	it("formata milhões com múltiplos separadores", () => {
		expect(formatNumber(1_234_567)).toBe("1.234.567");
	});

	it("formata números abaixo de mil sem separador", () => {
		expect(formatNumber(999)).toBe("999");
	});

	it("formata zero", () => {
		expect(formatNumber(0)).toBe("0");
	});

	it("formata números negativos", () => {
		expect(formatNumber(-1)).toBe("-1");
	});
});
