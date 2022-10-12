/**
 * File that contains the auth errors in pt (Brazil & Portugal) language.
 * Created on: Wed, 12 Oct 2022
 * File created by pmba.
 */

import type { TranslateDictionary } from "../../types";

const pt: TranslateDictionary = [
  "pt",
  {
    "storage/unknown": {
      toDev: "Ocorreu um erro desconhecido.",
      toClient: "default",
    },
    "storage/object-not-found": {
      toDev: "Nenhum objeto existe na referência desejada.",
      toClient: "default",
    },
    "storage/bucket-not-found": {
      toDev: "Nenhum bucket está configurado para o Cloud Storage",
      toClient: "default",
    },
    "storage/project-not-found": {
      toDev: "Nenhum projeto está configurado para o Cloud Storage",
      toClient: "default",
    },
    "storage/quota-exceeded": {
      toDev:
        "A cota no seu bucket do Cloud Storage foi excedida. Se você estiver no nível gratuito, atualize para um plano pago. Se você estiver em um plano pago, entre em contato com o suporte do Firebase.",
      toClient: "Limite do plano gratuito excedido, retorne amanhã.",
    },
    "storage/unauthenticated": {
      toDev: "O usuário não está autenticado, autentique-se e tente novamente.",
      toClient: "Você deve fazer login para executar esta ação.",
    },
    "storage/unauthorized": {
      toDev:
        "O usuário não está autorizado a realizar a ação desejada, verifique suas regras de segurança para garantir que estejam corretas.",
      toClient: "Você não tem permissão para realizar esta ação.",
    },
    "storage/retry-limit-exceeded": {
      toDev:
        "O limite de tempo máximo de uma operação (upload, download, exclusão etc.) foi excedido. Tente fazer o upload novamente.",
      toClient: "Tempo de espera excedido.",
    },
    "storage/invalid-checksum": {
      toDev:
        "O arquivo no cliente não corresponde à soma de verificação do arquivo recebido pelo servidor. Tente fazer o upload novamente.",
      toClient: "Erro com o arquivo, tente carregá-lo novamente.",
    },
    "storage/canceled": {
      toDev: "O usuário cancelou a operação.",
      toClient: "Operação cancelada pelo usuário.",
    },
    "storage/invalid-event-name": {
      toDev:
        "Nome de evento inválido fornecido. Deve ser um de ['running', 'progress', 'pause']",
      toClient: "default",
    },
    "storage/invalid-url": {
      toDev:
        "URL inválido fornecido para refFromURL(). Deve estar no formato: gs://bucket/object ou https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>",
      toClient: "default",
    },
    "storage/invalid-argument": {
      toDev:
        "O argumento passado para put() deve ser 'File', 'Blob' ou 'UInt8' Array. O argumento passado para putString() deve ser uma string bruta, 'Base64' ou 'Base64URL'.",
      toClient: "default",
    },
    "storage/no-default-bucket": {
      toDev:
        "Nenhum bucket foi definido na propriedade storageBucket da sua configuração.",
      toClient: "default",
    },
    "storage/cannot-slice-blob": {
      toDev:
        "Geralmente ocorre quando o arquivo local foi alterado (excluído, salvo novamente etc.). Tente fazer o upload novamente depois de verificar se o arquivo não foi alterado.",
      toClient: "Erro com o arquivo, tente carregá-lo novamente.",
    },
    "storage/server-file-wrong-size": {
      toDev:
        "O arquivo no cliente não corresponde ao tamanho do arquivo recebido pelo servidor. Tente fazer o upload novamente.",
      toClient: "Erro com o arquivo, tente carregá-lo novamente.",
    },
  },
];

export default pt;
