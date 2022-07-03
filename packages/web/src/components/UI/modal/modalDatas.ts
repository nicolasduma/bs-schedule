interface ModalDataInterface {
  type: 'action' | 'info'
  title: string
  description: string
  onClickInYesButton?: () => any
}

const modalDatas: Record<string, ModalDataInterface> = {
  'password/incorrect': {
    type: 'action',
    title: 'Deseja redefinir sua senha?',
    description:
      'Senha incorreta, tente novamente ou clique em sim para receber um email com um link para redefinir sua senha.',
    onClickInYesButton: () => console.log('sending email'),
  },

  'oauth/error': {
    type: 'info',
    title: 'Houve um error',
    description:
      'Não foi possivel fazer o acesso com a sua conta do Google, por favor tente novamente.',
  },

  'there-was-error': {
    type: 'info',
    title: 'Houve um error',
    description: 'Por favor, tente novamente mais tarde.',
  },
}

export default modalDatas
