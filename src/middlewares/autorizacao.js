module.exports = (cargosObrigatorios) => (requisicao, resposta, proximo) => {
  if (cargosObrigatorios.indexOf(requisicao.user.cargo) === -1) {
    resposta.status(403).json({
      mensagem: 'Você não tem permissão para realizar esta ação.'
    })
    resposta.end()
    return
  }
  proximo()
}
