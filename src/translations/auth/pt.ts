/**
 * File that contains the auth errors in pt (Brazil & Portugal) language.
 * Created on: Wed, 12 Oct 2022
 * File created by pmba.
 */

import type { TranslateDictionary } from "../../types";

const pt: TranslateDictionary = [
  "pt",
  {
    "auth/claims-too-large": {
      toDev:
        "A carga útil de declarações fornecida para setCustomUserClaims() excede o tamanho máximo permitido de 1.000 bytes.",
      toClient: "default",
    },
    "auth/email-already-exists": {
      toDev:
        "O e-mail fornecido já está em uso por um usuário existente. Cada usuário deve ter um e-mail exclusivo.",
      toClient:
        "O e-mail fornecido já está em uso por um usuário existente, forneça outro e-mail.",
    },
    "auth/id-token-expired": {
      toDev: "O token de ID do Firebase fornecido expirou.",
      toClient: "Seu token de ID expirou, tente fazer login novamente.",
    },
    "auth/id-token-revoked": {
      toDev: "O token de ID do Firebase foi revogado.",
      toClient: "Seu token de ID foi revogado, tente fazer login novamente.",
    },
    "auth/insufficient-permission": {
      toDev:
        "A credencial usada para inicializar o SDK Admin não tem permissão suficiente para acessar o recurso de autenticação solicitado. Consulte Configurar um projeto do Firebase para obter a documentação sobre como gerar uma credencial com as permissões apropriadas e usá-la para autenticar os SDKs Admin.",
      toClient: "default",
    },
    "auth/internal-error": {
      toDev:
        "O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação. A mensagem de erro deve conter a resposta do servidor de autenticação contendo informações adicionais. Se o erro persistir, informe o problema ao nosso canal de suporte Bug Report.",
      toClient: "default",
    },
    "auth/invalid-argument": {
      toDev:
        "Um argumento inválido foi fornecido para um método de autenticação. A mensagem de erro deve conter informações adicionais.",
      toClient: "default",
    },
    "auth/invalid-claims": {
      toDev:
        "Os atributos de declaração personalizados fornecidos para setCustomUserClaims() são inválidos.",
      toClient: "default",
    },
    "auth/invalid-continue-uri": {
      toDev: "A URL de continuação deve ser uma string de URL válida.",
      toClient: "default",
    },
    "auth/invalid-creation-time": {
      toDev: "A hora de criação deve ser uma string de data UTC válida.",
      toClient: "default",
    },
    "auth/invalid-credential": {
      toDev:
        "A credencial usada para autenticar os SDKs Admin não pode ser usada para realizar a ação desejada. Certos métodos de autenticação, como createCustomToken() e VerifyIdToken(), exigem que o SDK seja inicializado com uma credencial de certificado, em oposição a um token de atualização ou credencial padrão do aplicativo. Consulte Inicializar o SDK para obter documentação sobre como autenticar os SDKs Admin com uma credencial de certificado.",
      toClient: "default",
    },
    "auth/invalid-disabled-field": {
      toDev:
        "O valor fornecido para a propriedade do usuário desativado é inválido. Deve ser um booleano.",
      toClient: "default",
    },
    "auth/invalid-display-name": {
      toDev:
        "O valor fornecido para a propriedade de usuário displayName é inválido. Deve ser uma string não vazia.",
      toClient:
        "O valor fornecido do seu nome é inválido, por favor escreva um texto não vazio.",
    },
    "auth/invalid-dynamic-link-domain": {
      toDev:
        "O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.",
      toClient: "default",
    },
    "auth/invalid-email": {
      toDev:
        "O valor fornecido para a propriedade de usuário de email é inválido. Deve ser um endereço de e-mail de string.",
      toClient:
        "O valor fornecido para o seu e-mail é inválido, por favor escreva um endereço de e-mail válido.",
    },
    "auth/invalid-email-verified": {
      toDev:
        "O valor fornecido para a propriedade do usuário emailVerified é inválido. Deve ser um booleano.",
      toClient: "default",
    },
    "auth/invalid-hash-algorithm": {
      toDev:
        "O algoritmo de hash deve corresponder a uma das strings na lista de algoritmos suportados.",
      toClient: "default",
    },
    "auth/invalid-hash-block-size": {
      toDev: "O tamanho do bloco de hash deve ser um número válido.",
      toClient: "default",
    },
    "auth/invalid-hash-derived-key-length": {
      toDev:
        "O comprimento da chave derivada de hash deve ser um número válido.",
      toClient: "default",
    },
    "auth/invalid-hash-key": {
      toDev: "A chave de hash deve ser um buffer de bytes válido.",
      toClient: "default",
    },
    "auth/invalid-hash-memory-cost": {
      toDev: "O custo de memória hash deve ser um número válido.",
      toClient: "default",
    },
    "auth/invalid-hash-parallelization": {
      toDev: "A paralelização de hash deve ser um número válido.",
      toClient: "default",
    },
    "auth/invalid-hash-rounds": {
      toDev: "As rodadas de hash devem ser um número válido.",
      toClient: "default",
    },
    "auth/invalid-hash-salt-separator": {
      toDev:
        "O campo separador de sal do algoritmo de hash deve ser um buffer de bytes válido.",
      toClient: "default",
    },
    "auth/invalid-id-token": {
      toDev: "O token de ID fornecido não é um token de ID do Firebase válido.",
      toClient: "default",
    },
    "auth/invalid-last-sign-in-time": {
      toDev: "A última hora de login deve ser uma string de data UTC válida.",
      toClient: "default",
    },
    "auth/invalid-page-token": {
      toDev:
        "O token de próxima página fornecido em listUsers() é inválido. Deve ser uma string não vazia válida.",
      toClient: "default",
    },
    "auth/invalid-password": {
      toDev:
        "O valor fornecido para a propriedade de usuário de senha é inválido. Deve ser uma string com pelo menos seis caracteres.",
      toClient:
        "O valor fornecido para sua senha é inválido, escreva uma string com pelo menos seis caracteres.",
    },
    "auth/invalid-password-hash": {
      toDev: "O hash de senha deve ser um buffer de bytes válido.",
      toClient: "default",
    },
    "auth/invalid-password-salt": {
      toDev: "O salt da senha deve ser um buffer de bytes válido",
      toClient: "default",
    },
    "auth/wrong-password": {
      toDev: "O e-mail e a senha que você digitou não correspondem",
      toClient: "O e-mail e a senha que você digitou não correspondem",
    },
    "auth/invalid-phone-number": {
      toDev:
        "O valor fornecido para phoneNumber é inválido. Deve ser uma string identificadora compatível com o padrão E.164 não vazia.",
      toClient:
        "O valor fornecido para o seu número de telefone é inválido, escreva um texto não vazio seguindo o padrão E.164.",
    },
    "auth/invalid-photo-url": {
      toDev:
        "O valor fornecido para a propriedade do usuário photoURL é inválido. Deve ser um URL de string.",
      toClient:
        "O URL fornecido para sua foto de perfil é inválido, por favor escreva um URL válido.",
    },
    "auth/invalid-provider-data": {
      toDev: "O providerData deve ser uma matriz válida de objetos UserInfo.",
      toClient: "default",
    },
    "auth/invalid-provider-id": {
      toDev:
        "O providerId deve ser uma string de identificador de provedor compatível válida.",
      toClient: "default",
    },
    "auth/invalid-oauth-responsetype": {
      toDev:
        "Apenas exatamente um responseType OAuth deve ser definido como true.",
      toClient: "default",
    },
    "auth/invalid-session-cookie-duration": {
      toDev:
        "A duração do cookie de sessão deve ser um número válido em milissegundos entre 5 minutos e 2 semanas.",
      toClient: "default",
    },
    "auth/invalid-uid": {
      toDev:
        "O uid fornecido deve ser uma string não vazia com no máximo 128 caracteres.",
      toClient:
        "O valor fornecido para o identificador de usuário não é válido, escreva um texto não vazio com no máximo 128 caracteres.",
    },
    "auth/invalid-user-import": {
      toDev: "O registro do usuário a ser importado é inválido.",
      toClient: "default",
    },
    "auth/maximum-user-count-exceeded": {
      toDev:
        "O número máximo permitido de usuários para importação foi excedido.",
      toClient: "default",
    },
    "auth/missing-android-pkg-name": {
      toDev:
        "Um nome de pacote Android deve ser fornecido se o aplicativo Android precisar ser instalado.",
      toClient: "default",
    },
    "auth/missing-continue-uri": {
      toDev: "Um URL de continuação válido deve ser fornecido na solicitação.",
      toClient: "default",
    },
    "auth/missing-hash-algorithm": {
      toDev:
        "A importação de usuários com hashes de senha requer que o algoritmo de hash e seus parâmetros sejam fornecidos.",
      toClient: "default",
    },
    "auth/missing-ios-bundle-id": {
      toDev: "A solicitação não tem um ID de pacote.",
      toClient: "default",
    },
    "auth/missing-uid": {
      toDev: "Um identificador uid é necessário para a operação atual.",
      toClient: "default",
    },
    "auth/missing-oauth-client-secret": {
      toDev:
        "O segredo do cliente de configuração OAuth é necessário para habilitar o fluxo de código OIDC.",
      toClient: "default",
    },
    "auth/operation-not-allowed": {
      toDev:
        "O provedor de login fornecido está desativado para seu projeto do Firebase. Ative-o na seção Método de login do console do Firebase.",
      toClient: "Este método de login não está disponível no momento.",
    },
    "auth/phone-number-already-exists": {
      toDev:
        "O phoneNumber fornecido já está em uso por um usuário existente. Cada usuário deve ter um phoneNumber exclusivo.",
      toClient:
        "O número de telefone fornecido já está em uso por outro usuário, forneça outro número de telefone.",
    },
    "auth/project-not-found": {
      toDev:
        "Nenhum projeto do Firebase foi encontrado para a credencial usada para inicializar os SDKs Admin. Consulte Configurar um projeto do Firebase para obter a documentação sobre como gerar uma credencial para seu projeto e usá-la para autenticar os SDKs Admin.",
      toClient: "default",
    },
    "auth/reserved-claims": {
      toDev:
        "Uma ou mais declarações de usuário personalizadas fornecidas a setCustomUserClaims() são reservadas. Por exemplo, declarações específicas de OIDC como (sub, iat, iss, exp, aud, auth_time etc.) não devem ser usadas como chaves para declarações personalizadas.",
      toClient: "default",
    },
    "auth/session-cookie-expired": {
      toDev: "O cookie de sessão do Firebase fornecido expirou.",
      toClient: "default",
    },
    "auth/session-cookie-revoked": {
      toDev: "O cookie de sessão do Firebase foi revogado.",
      toClient: "default",
    },
    "auth/uid-already-exists": {
      toDev:
        "O uid fornecido já está em uso por um usuário existente. Cada usuário deve ter um uid exclusivo.",
      toClient: "default",
    },
    "auth/unauthorized-continue-uri": {
      toDev:
        "O domínio do URL de continuação não está na lista de permissões. Coloque o domínio na lista de permissões no Firebase Console.",
      toClient: "default",
    },
    "auth/user-not-found": {
      toDev:
        "Não há registro de usuário existente correspondente ao identificador fornecido.",
      toClient: "Usuário não encontrado, verifique suas informações.",
    },
  },
];

export default pt;
