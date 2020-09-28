var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'aries':
        console.log('En este día, podría enfrentarse con situaciones difíciles que le exigirán al máximo su atención. Sea paciente y antes de actuar piense bien los movimientos.z')
        break
    case 'tauro':
        console.log('Intente reflexionar antes de accionar en sus proyectos. De esta forma, logrará reconocer algunas dudas que le impiden alcanzar siempre los objetivos que se propone.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Seguramente viva una situación un tanto complicada y confusa. Deténgase y guíese por la intuición, que le hará ver las cosas con mayor claridad.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Dude de aquellas personas que no conoce y que se arriman a usted repentinamente. Tenga en cuenta que podrían llegar a retrasarle los proyectos que está generando.')
        break
    case 'leo':
        console.log('Entienda que no es momento para que se proponga grandes logros, sepa que lo ideal sería ir resolviendo de a poco las pequeñas cuestiones pendientes.')
        break
    case 'virgo':
        console.log('Cuando se relacione con los demás, necesitará moderar su carácter. Procure encarar la vida desde otro punto de vista, sin ser tan agresivo con la gente que lo rodea.')
        break
    case 'libra':
        console.log('Aunque le duela en el alma, sepa que tendrá que rechazar ese proyecto que le ofrecieron hace días. No es un buen momento para invertir todo su capital.')
        break
    case 'escorpio':
        console.log('Entienda que el rencor no es un buen consejero en la vida. Sepa que debe actuar sin que el sentimiento oscurezca su razón. Actúe de forma prudente.')
        break
    case 'sagitario':
        console.log('Podrá sentir que las cosas no salen como usted las planeó y terminar irritado. Deberá moderar su temperamento y verá que de a poco las cosas mejorarán.')
        break
    case 'capricornio':
        console.log('Aunque se multipliquen las dificultades, procure no abandonar los objetivos que se propuso meses atrás. Tranquilícese y reorganice su vida para cumplirlos.')
        break
    case 'acuario':
        console.log('Aunque no se sienta totalmente feliz, procure que la melancolía no lo atrape en estos momentos. Modifique el estilo de su vida y todo mejorará pronto.')
        break
    case 'picis':
        console.log('En esta jornada, no dude e invierta todos sus esfuerzos para concretar los objetivos que tiene pendientes en su vida. Evite distraerse en discusiones inútiles.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}