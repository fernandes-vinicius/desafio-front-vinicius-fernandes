import axios from "axios";

import { ApiError } from "~/api/error";

export const apiClient = axios.create({
	baseURL: "https://api.github.com",
	timeout: 10_000,
	headers: {
		Accept: "application/vnd.github+json",
	},
});

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (axios.isAxiosError(error) && error.response) {
			const { status, headers } = error.response;

			if (status === 404) {
				return Promise.reject(
					new ApiError("Usuário ou repositório não encontrado", 404),
				);
			}

			if (status === 403 && headers["x-ratelimit-remaining"] === "0") {
				return Promise.reject(
					new ApiError(
						"Limite de requisições da API do Github atingido. Tente novamente em alguns minutos.",
						429,
					),
				);
			}
		}

		return Promise.reject(
			new ApiError("Não foi possível completar a requisição", 0),
		);
	},
);
