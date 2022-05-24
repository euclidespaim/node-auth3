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

// Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result...
