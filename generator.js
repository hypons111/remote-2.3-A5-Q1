function generator(roleChoice) {
  const role = ['工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const roleRandom = Math.floor(Math.random() * role.length)
  const taskRandom = Math.floor(Math.random() * task.entrepreneur.length)
  const phraseRandom = Math.floor(Math.random() * phrase.length)

  const sentence = ''

  if (roleChoice === 'engineer') {
    const sentence = role[0] + task.engineer[taskRandom] + phrase[phraseRandom]
    return sentence
  } else if (roleChoice === 'designer') {
    const sentence = role[1] + task.designer[taskRandom] + phrase[phraseRandom]
    return sentence
  } else if (roleChoice === 'entrepreneur') {
    const sentence = role[2] + task.entrepreneur[taskRandom] + phrase[phraseRandom]
    return sentence
  }


}

//generator()

module.exports = generator
