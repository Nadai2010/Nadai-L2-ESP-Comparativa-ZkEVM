## Zk-EVM

Feliz año 2023, que mejor forma de empezar que con una comparación entre las `Zk-EVM` a modo usuario, técnicos y experiencias en algunas pruebas realizadas. Entre ellas compararemos Taiko, Scroll, ZkSync, Consensys y zk-EVM Polygon y como nos ha resultado la experiencia de acceder a estas tesnet, agregar sus rcp, conseguir faucet, tablas de fee e inclusive veremos como ha ido la experiencia en desarrollar nuestros propios ERC20 con contratos Standard desde [OpenZepelin Wizard](https://wizard.openzeppelin.com/) y luego deployandolos en Remix.

Pero primero hablemos un poco sobre ella, `la zk-EVM`, es una tecnología que permite la creación de contratos inteligentes privados en una cadena de bloques pública. Esto se logra mediante la utilización de criptografía zero-knowledge `(zk)`, para ocultar la información del contrato y las transacciones relacionadas. Esto significa que los participantes en la red pueden verificar la validez de una transacción sin necesidad de conocer su contenido exacto.

Existen varias implementaciones de zk-EVM disponibles en el mercado, cada una con sus propias características y ventajas. A continuación describiremos algunas de las implementaciones más conocidas:

* [Taiko:](https://taiko.xyz/) Los ZK-Rollups equivalentes a Ethereum, a veces llamados ZK-EVM, son el santo grial de las soluciones de escalado de capa 2, ya que no comprometen la seguridad ni la compatibilidad. En lenguaje reciente, Taiko pretende ser un ZK-EVM de tipo 1 , que prioriza la equivalencia perfecta de EVM/Ethereum sobre la velocidad de generación a prueba de ZK.

* [Scroll:](https://scroll.io/) Scroll es otra implementación de zk-EVM desarrollada por el equipo de Matter Labs. La solución nativa de escalado zkEVM para Ethereum Scroll es un zkRollup basado en zk-EVM en Ethereum que permite la compatibilidad nativa para las aplicaciones y herramientas de Ethereum existentes.

* [zkEVM-Polygon:](https://polygon.technology/solutions/polygon-zkevm) La zk-EVM-Polygon es una implementación de zk-EVM desarrollada por el equipo de Polygon. Es la una solución de escalado de conocimiento cero `(ZK)`, que es totalmente compatible con Ethereum. Todos los contratos inteligentes, herramientas de desarrollo y billeteras existentes funcionan a la perfección. El zkEVM aprovecha el poder de las pruebas ZK para reducir el costo de transacción y aumentar enormemente el rendimiento, todo mientras hereda la seguridad de Ethereum L1.

* ZkSync2.0: ZkSync es una implementación de zk-EVM desarrollada por el equipo de Matter Labs. Se basa en el protocolo Rollup de Ethereum y se ejecuta en el algoritmo de consenso de prueba de estaca (PoS) de Ethereum 2.0. ZkSync tiene un enfoque en la escalabilidad y la privacidad, y permite la creación de contratos privados y la ejecución de transacciones privadas en una red pública. También se utiliza el lenguaje de programación Solidity para escribir los contratos. Su diseño de privacidad se basa en técnicas de privacidad en el nivel de protocolo y su descentralización se basa en el algoritmo de consenso PoS



* ConsenSys Diligence: Es una implementación de zk-EVM desarrollada por ConsenSys. Está diseñada para proporcionar privacidad y cumplimiento normativo para las organizaciones. Su diseño de privacidad se basa en técnicas de privacidad en el nivel de protocolo y su descentralización se basa en el algoritmo de consenso PoS

* ConsenSys Codefi: Es una implementación de zk-EVM desarrollada por ConsenSys. Está diseñada para proporcionar privacidad y escalabilidad para aplicaciones financieras en una cadena de bloques pública. Su diseño de privacidad se basa en técnicas de privacidad en el nivel de protocolo y su descentralización se basa en el algoritmo de consenso PoS.

En cuanto a las ventajas y desventajas de cada implementación, cada una tiene su enfoque único y características específicas. Por ejemplo, Taiko y zkEVM-Polygon tienen una mayor descentralización y un menor costo de transacción debido al uso de DPoS, pero pueden tener una menor escalabilidad en comparación con Scroll y ZkSync, que utilizan PoS. Scroll y ZkSync tienen un enfoque en la escalabilidad y la privacidad, pero pueden tener un costo de transacción más alto debido al uso de PoS. ConsenSys Diligence y ConsenSys Codefi están diseñadas para proporcionar privacidad y cumplimiento normativo o escalabilidad para aplicaciones financieras, respectivamente, pero pueden tener una menor descentralización debido al uso de PoS.

Sin embargo, es importante tener en cuenta que estas tecnologías aún son muy nuevas y se encuentran en una fase temprana de desarrollo, por lo que todavía se requiere más investigación y desarrollo antes de poder determinar si son viables a largo plazo. Por lo que decidimos empezar a testearla y compartir los resultados. Siempre tener en cuenta que los valores obtenidos pueden variar dependiendo de congestión de red, linea de tiempo distinta u otras datos, aunque se han hecho media de las últimas 25 páginas para tener algo mas aproximádo en la tabla de acontinuación. Luego detallaremos una a una cada solución de zk-EVM.


```bash
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                              COMPARATIVA ENTRE ZK-EVM 2.0                                       ║ 
╠═══════════════╦══════════╦═══════════════╦══════════════════╦══════════════╦══════════════╦══════════╦═════════╣
║     ZK-EVM    ║    RCP   ║     FAUCET    ║       BRIDGE     ║   WHITELIST  ║  EXPLORADOR  ║  DEPLOY  ║   FEE   ║ 
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╬═════════╣
║   SCROLL L1   ║   AUTO   ║ TWITTER-FAST  ║ EN 1 PASO  -GOOD ║      NO      ║ 30-40 TX/BLQ ║  FÁCIL   ║ 0.10 USD║      
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╬═════════╣
║   SCROLL L2   ║   AUTO   ║ TWITTER-FAST  ║ EN 1 PASO  -SLOW ║      NO      ║  5-20 TX/BLQ ║  FÁCIL   ║ 0.15 USD║ 
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╬═════════╣
║ ZKEVM-POLYGON ║ MAN-AUTO ║  ETH GOERLI   ║ EN 2 PASOS -GOOD ║      NO      ║   1   TX/BLQ ║  FÁCIL   ║ 0.07 USD║ 
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╣═════════╣
║    TAIKO L1   ║  MANUAL  ║ CAPTCHA-FAST  ║*EN 2 PASOS -REGUL║      NO      ║ 40-60 TX/BLQ ║  FÁCIL   ║ 2.6  USD║ 
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╣═════════╣
║    TAIKO L2   ║  MANUAL  ║    SOLO L1    ║ EN 2 PASOS -SLOW ║      NO      ║  1-5  TX/BLQ ║  FÁCIL   ║ 0.15 USD║ 
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╣═════════╣
║  ZK-SYNC 2.0  ║ MAN-AUTO ║ TWITTER-SLOW  ║ EN 1 PASO  -GOOD ║      NO      ║  1-3  TX/BLQ ║  HARD    ║ 0.48 USD║ 
╠═══════════════╬══════════╬═══════════════╬══════════════════╬══════════════╬══════════════╬══════════╣═════════╣
║   CONSENSYS   ║ *        ║               ║                  ║*SI-RCP INFURA║  1-3  TX/BLQ ║ 
╚═══════════════╩══════════╩═══════════════╩══════════════════╩══════════════╩══════════════╩══════════╩═════════╝

```
* `RCP`: Es el punto de acceso para interactuar con la red y puede variar dependiendo de la implementación de zk-EVM.
* `Faucet`: Es un servicio que permite obtener fondos gratuitos para probar la red y puede variar dependiendo de la implementación de zk-EVM.
* `Bridge`: es un servicio que permite conectar dos o mas redes blockchain y puede variar dependiendo de la implementación de zk-EVM. 
* `Whitelist:` es un mecanismo de seguridad que permite especificar un conjunto de direcciones de billetera autorizadas para realizar transacciones en un contrato inteligente o en una red blockchain
* `Explorador:` Es una herramienta que permite ver el estado actual de la red y puede variar dependiendo de la implementación de zk-EVM.
* `Deploy:` Es el proceso de desplegar un contrato en la red y puede variar dependiendo de la implementación de zk-EVM.
* `Fee:` Es el costo de transacción y puede variar dependiendo de la congestión de la red y la competencia entre los validadores.

---
# Taiko

## Principios de Taiko

Según los documentos oficiales de Taiko debajo de la capa 1 está la capa 0, la gente. Las cadenas de bloques son construidas por personas, y lo que les importa a estas personas se integra en el contrato social, en el código y en el diseño general. 

Tenemos buenas razones para ceñirnos al ejemplo y la especificación de Ethereum; no es sólo por mero amor al protocolo y al pueblo. Es porque es el único ecosistema que nos da lo que nos importa y una oportunidad de cambiar el mundo para mejor, especialmente para aquellos que más lo necesitan. Esto suena elevado, pero esos son los objetivos de la comunidad Ethereum y de Taiko.

A continuación, compartimos los principios de Taiko, tres principios básicos que nos guían.

1. Accesible: Cualquiera que quiera usar, desarrollar o participar en Taiko puede hacerlo. Este es el caso porque las tarifas de transacción son económicas y el rendimiento es alto; la experiencia del desarrollador es sólida y la migración de dapp de Ethereum es perfecta; la red no tiene permisos y reutiliza la infraestructura de Ethereum al máximo. No se puede tener libertad sin acceso.

2. Inclusivo: Taiko es resistente a la censura y no puede excluir grupos o individuos. El resumen está descentralizado: depende de Ethereum para la disponibilidad y seguridad de los datos; y sin permiso, lo que permite que cualquier participante, usuario o constructor de la red se suscriba. No hay roles especiales que puedan censurar usuarios/aplicaciones/transacciones. Solo estamos interesados ​​en construir sistemas justos y creíblemente neutrales.

3. Abierto: Taiko es completamente de código abierto y está centrado en la comunidad. Construimos sobre los hombros de gigantes y apreciamos contribuir de nuevo al progreso técnico y la comunidad de Ethereum. Valoramos las contribuciones de la comunidad al proyecto, aprovechando las mejores mentes e ideas que están interesadas en el espacio. El tipo de actividad que Taiko ejecuta y asegura exige transparencia.

### Pruebas RCP

Para agregar el RCP en Metamask ha resultado sencillo, aunque la experiencia ha sido manual, para ello deberemos de ir a Metamask, Redes y Agregar otras Redes. Puede consultar documentación oficial y como agregarla desde [aquí](https://taiko.xyz/docs/alpha-1-testnet/configure-wallet)

### Pruebas Faucet

En Taiko para conseguir faucet podemos usar nuestro Twitter desde el link oficial y luego compartir nuestro enlace para verificar y recibir ETH de prueba. Nos valdrá el mismo twet para conseguir faucet en [L1](https://l1faucet.a1.taiko.xyz/) y en [L2](https://l2faucet.a1.taiko.xyz/).

### Pruebas Bridge

Hemos enviado por el [Bridge Taiko](https://bridge.a1.taiko.xyz/) desde Ethereum A1 a Taiko A1 la cantidad de [0.05 ETH](https://l1explorer.a1.taiko.xyz/tx/0x61967b34488a16f5ef7a72f9c918d8b8185047aa6e24363f44c7994a4beaf467) (0.002646895244654985 Ether = 3.45 usd ) la cual hemos tenido que hacer un Claim para poder pagar los fee desde el cual me ha [fallado 3 veces](https://l2explorer.a1.taiko.xyz/tx/0xff3746a3ba5c0ae61bab1aa56e3c471f35b466d8eb81d3ab561dbde1fff42108), a la cuarta le tripliqué el gas manual `3.000.000 gas limit` para probar y la transacción [se confirmó](https://l2explorer.a1.taiko.xyz/tx/0xc5897ae22b975b9564a576e785f7d70c44792b7df16019c6c134fdc869d68cb1) pero a un fee (0.002165108 Ether = 2.88 usd), que como podemos comprobar es muy diferente de los 8 usd que marcaba nuestra wallet.

### Pruebas Deploy

El deploy ha sido desde Remix, no habido ninguna complicación solo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RCP de Ethereum A1 como Taiko A1 concecutivamente sin tener ningun tipo de inconveniente..


* [Deploy Ethereum A1](https://l1explorer.a1.taiko.xyz/tx/0x09730dafd4f688999eb3ccc95e3159ddd3d33f9d713f7e03aac379161e8a9138)
* [Token Contract L1](https://l1explorer.a1.taiko.xyz/token/0xE391fC071fc166953502E6368B7FE713691A9B79/token-transfers)

* [Deploy Taiko A1](https://l2explorer.a1.taiko.xyz/tx/0x3fd68713a5a4f04468e09d89d608b0b6095e72d796b025dacf26b1e7808ae798)
* [Token Contract L2](https://l2explorer.a1.taiko.xyz/token/0xA330cF7FDE4F9FE6E36c3909650C72362D360421/token-transfers)

### Pruebas Fee 

Probamos a enviar desde Ethereum A1 entre wallets 500 L2Tai , el envio fue casi instantáneo y el fee (0.002030320255912087 Ether = 2.6 usd)

* [Hash envio Ethereum A1](https://l1explorer.a1.taiko.xyz/tx/0xc2badc0d7112cb8fd5bbab0301dce7efb947a298190f68ab19352583bce24cb6)

Probamos a enviar desde Taiko A1 entre wallets 500 L2Tai , el envio fue casi instantáneo y el fee (0.0001148642 Ether = 0.15 usd)

* [Hash envio Taiko A1](https://l2explorer.a1.taiko.xyz/tx/0x935172cdb25b9e93898d0c20a90e3ddd4b8e3e60de15e6573082fc048a7ff312)

----

# Scroll

## Principios de Scroll

Según uno de los [documentos oficiales de Scroll](https://scroll.io/blog/technicalPrinciples#heading-2), se basan en escalar Ethereum con su zkRollup basado en zkEVM, han diseñado Scroll basado en un conjunto de principios técnicos que defienden los valores fundamentales de Scroll. 

1. Garantizar la seguridad del usuario: En el contexto de las soluciones de escalado de blockchain, la forma más importante de seguridad se refiere a la integridad de los fondos y datos de los usuarios. Si bien una solución de escalado puede ofrecer a los usuarios capacidades adicionales, creemos que garantizar que los usuarios mantengan el acceso a sus fondos es lo primero. Para Scroll, esto significa que los usuarios no deberían depender de la honestidad de los nodos de la Capa 2 para la seguridad y, en su lugar, pueden aprovechar la seguridad total de la Capa 1 incluso cuando realizan transacciones en la Capa 2. Al desarrollar Ethereum de acuerdo con este principio, estamos arraigando el seguridad de Scroll en el consenso más seguro y descentralizado de la capa base de Ethereum.

2. Mantener la equivalencia EVM: Además de brindarles a los usuarios capacidades adicionales, una solución de escalado de Ethereum efectiva debería brindarles a los usuarios y desarrolladores una ruta de migración sin inconvenientes desde las dapps existentes y las herramientas para desarrolladores. Creemos que mantener la equivalencia EVM es la mejor manera de lograrlo. Un entorno equivalente a EVM se comporta exactamente igual que la especificación de la máquina virtual de Ethereum en el documento amarillo de Ethereum . Esto significa que los usuarios y desarrolladores pueden migrar sin cambios de código adicionales, auditorías costosas o cambios disruptivos en su flujo de trabajo de desarrollo.

* La equivalencia de EVM proporciona garantías sustancialmente más sólidas que la simple compatibilidad con EVM a través de soluciones como la transpilación. Conformarse con la mera compatibilidad puede obligar a los usuarios y desarrolladores a modificar o incluso reimplementar por completo grandes porciones de la infraestructura de soporte de Ethereum. Además, mantener la seguridad se vuelve mucho más difícil sin la equivalencia de EVM. Como resultado, para ser lo más fácil posible para el desarrollador y el usuario, `Scroll es equivalente a EVM, no simplemente compatible con EVM.`

3. Eficiencia: Para que los usuarios disfruten de una gran experiencia en una Capa 2, creemos que las tarifas de transacción deben ser bajas, órdenes de magnitud más baratas que en la capa base. Los usuarios deberían experimentar una confirmación previa instantánea en la Capa 2 y una finalización razonablemente rápida en la capa base (Ethereum en nuestro caso).

* Si bien estas condiciones son fáciles de satisfacer con un operador centralizado, para preservar la seguridad deben seguir manteniéndose en un entorno descentralizado. En el contexto de la Capa 2, creemos que Scroll debe ser lo más eficiente posible mientras mantiene la seguridad del usuario y la descentralización tanto en la Capa 2 como en la capa base.

4. Descentralización en todas las capas de la comunidad: La descentralización es una propiedad central de las cadenas de bloques que a menudo se pasa por alto o se intercambia de manera inadecuada por eficiencia. Creemos que es uno de los aspectos más valiosos de las cadenas de bloques y garantiza que los protocolos y las comunidades sean vibrantes y resistentes frente a la censura o los ataques coordinados. Consideramos la descentralización en muchos aspectos de Scroll, incluidos los operadores de nodos, los probadores y la comunidad de desarrolladores y usuarios. Al construir abiertamente con la comunidad y trazar un camino creíble para descentralizar tanto la prueba como la secuenciación, Scroll se compromete a garantizar la descentralización en todas las dimensiones.

### Pruebas RCP

Para agregar el RCP en Metamask ha resultado sencillo, la experiencia ha sido automática y sólo deberemos darle a `add Metamask` desde los [documentos oficiales](https://scroll.io/prealpha/), el cual mostrará en nuestra Metamask directamente los datos necesarios para tener configurada [Scroll](https://scroll.io/) en nuestra billetera.

### Pruebas Faucet

En Scroll para conseguir faucet en L1 tendremos que ir su página de [Faucet](https://scroll.io/prealpha/faucet), verificar un captcha, poner nuestra wallet para recibir `1 ETH` y `100 TSUSDC` de prueba. Para L2 no hay faucet, así que se debe usar el bridge para recibir nuestros tokens en L2.

### Pruebas Bridge

Hemos enviado por el [Bridge Scroll](https://scroll.io/prealpha/bridge) desde Scroll L1 a Scroll L2 la cantidad de [0.5 ETH](https://l1scan.scroll.io/tx/0xdfe42a882b64023047260de6207669c86e9aa7a4bb58370d96ebc485c71b492c) (0.000173922000927584 Ether = 0.22 usd ), todo ha sido en un solo paso sin tener que interactuar desde L2.

### Pruebas Deploy

El deploy ha sido desde Remix, no habido ninguna complicación solo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RCP de Scroll Testnet L1 como Scroll Testnet L2 concecutivamente sin tener ningun tipo de inconveniente.


* [Deploy  Scroll Testnet L1](https://l1scan.scroll.io/tx/0xdfadf91159cf13fa6e3466cf541ec2b464df7232bfc3f772c8631a8bc48dea50)
* [Token Contract L1](https://l1scan.scroll.io/token/0xE391fC071fc166953502E6368B7FE713691A9B79/token-transfers)

* [Deploy  Scroll Testnet L2](https://l2scan.scroll.io/tx/0x44b01b272fab0360c9465a5dfc5be95cf4eb2b5ea4072446880c6ec82f9fd35c)
* [Token Contract L2](https://l2scan.scroll.io/token/0xA330cF7FDE4F9FE6E36c3909650C72362D360421/token-transfers)

### Pruebas Fee

Probamos a enviar desde Scroll L1 entre wallets 500 L2Sco , el envio fue casi instantáneo y el fee (0.000078316500417688 Ether = 0.10 usd)

* [Hash envio Scroll L1](https://l1scan.scroll.io/tx/0x72f101d80c2bd690de3f9a22fe1c5f525b1485f85332d288142a831681cec28c)

Probamos a enviar desde Taiko A1 entre wallets 500 L2Tai , el envio fue casi instantáneo y el fee (0.0001148642 Ether = 0.15 usd)

* [Hash envio Scroll L2](https://l2scan.scroll.io/tx/0xf3e35b7e12b6b5788e059523e7b77707acc2cfcf8a62e6d202215a4dd6325395)

----

# Zk-EVM-Polygon 

## Principios de zk-EVM Polygon

Según los [documentos oficiales de Zk-EVM Polygon](https://polygon.technology/solutions/polygon-zkevm/) se basan en una solución de escalabilidad de Ethereum Layer 2 descentralizada que utiliza tecnología criptográfica de conocimiento cero `(zk)` para proporcionar validación y finalización rápida de los cálculos de transacciones fuera de la cadena. Ha sido diseñado y desarrollado para emular la máquina virtual de Ethereum (EVM) al recrear todos los códigos de operación de EVM existentes para una implementación transparente de los contratos inteligentes de Ethereum existentes.

1. Equivalente a EVM: Ethereum no es solo una cadena de bloques. Es un rico ecosistema de contratos inteligentes, herramientas para desarrolladores, infraestructura y billeteras. Es una comunidad vibrante de desarrolladores, auditores y usuarios. La mejor manera de escalar Ethereum es mantener la compatibilidad con este ecosistema, y ​​zkEVM brindará a los usuarios y desarrolladores una experiencia idéntica a Ethereum L1, solo que con una mejora masiva de escalabilidad.

2. Rendimiento: Muchas personas en criptografía creían que un zkEVM estaba a años de distancia y que tal vez nunca fuera práctico o competitivo con otros ZK L2. Esto se enmarcó como una compensación inevitable: podríamos tener compatibilidad total con EVM o alto rendimiento, pero no ambos. Sin embargo, con los avances en los sistemas de prueba promovidos por Polygon Zero, podemos lograr una compatibilidad total con EVM al mismo tiempo que ofrecemos un mejor rendimiento (mayor rendimiento, menor latencia y menor costo) que algunas L1, resúmenes optimistas y otros resúmenes ZK.

El zkEVM lleva a cabo cambios de estado, que provienen de ejecuciones de transacciones de capa 2 de Ethereum que los usuarios envían a la red y, posteriormente, produce pruebas de validez que atestiguan la exactitud de los cálculos de cambio de estado realizados fuera de la cadena.

Aunque adoptar este enfoque de diseño revolucionario fue una decisión difícil de tomar, el objetivo es minimizar la fricción de los usuarios y las dApps al usar la solución. Es un enfoque que requiere la recreación de todos los códigos de operación EVM para el despliegue transparente de los contratos inteligentes de Ethereum existentes. Para este propósito, el equipo ha creado y diseñado un nuevo conjunto de tecnologías y herramientas.

Hablemos ahora de [Hermez](https://docs.hermez.io/Hermez_1.0/about/scalability/) y algunos de sus principios:

1. Descentralizado: Se denomina red porque el modelo está descentralizado de forma nativa. Es una construcción de capa 2 y tiene la intención de realizar transacciones a miles por segundo, por lo que el algoritmo de consenso debe ser simple para que un agente (coordinador) procese esta cantidad de transacciones en un momento dado. Con este modelo, aún mantiene las propiedades de no tener permiso para participar y resistir la censura para las transacciones de los usuarios.

2. Eficiente: El modelo descentralizado se implementa a través de un sistema de subasta sin permiso para que los posibles coordinadores de la red obtengan el derecho de procesar transacciones durante un período de tiempo. Este modelo de subasta incentiva la eficiencia de los coordinadores ya que necesitan procesar tantas transacciones como puedan para cobrar las tarifas y compensar su inversión y sus gastos de operación (y ganar dinero con ello).

* Hermez implementa un ZK-Rollup basado en pruebas ZK-SNARK, el más eficiente en términos de costo por lotes en Ethereum. Dado que los lotes de transacciones tienen un tamaño máximo de 2000, los usuarios se beneficiarán de la escala y la tecnología subyacente para lograr ahorros nominales máximos de hasta el 97 % en comparación con el costo de Ethereum para una sola transferencia de token.

3. Seguridad en mente: La escalabilidad se puede lograr de diferentes maneras. Hermez es una construcción de capa 2 porque aprovecha Ethereum no solo mediante el uso de sus tokens nativos, sino también tomando prestada la seguridad de Ethereum como una fuerte cadena de bloques pública.

* La implementación de Hermez se basa en la tecnología propia de iden3 (bibliotecas Circom y SnarkJS) y la tecnología criptográfica que ha demostrado ser la más robusta hasta el momento, tal como se utiliza en la cadena de bloques ZCash. Como una red nueva con un período de arranque, Hermez tiene medidas de seguridad transitorias para proteger el sistema con el objetivo de eliminarlas y dejarlo completamente descentralizado.

4. Parte de la comunidad: Hermez está diseñado para contribuir con la comunidad, ya que el proyecto no sería posible sin él. Las innovaciones en escalabilidad son una rara oportunidad para realinear los incentivos en torno a la comunidad y los bienes públicos que brindan.

* El 40% del valor generado en la red será enviado a un proceso de donación donde los proyectos del ecosistema se beneficiarán de las donaciones. Comenzará con Gitcoin, pero es posible que se habiliten otros grupos en el futuro. Hermez abrirá el código fuente de todo el protocolo y el código coordinador, está abierto a contribuciones y se ha comprometido a contribuir a la creación de un ecosistema L2 para iniciativas como una mejor interoperabilidad L2.

5. Enfocado en la Usabilidad: ZK-Rollups proporciona la tecnología para la finalización instantánea de las transacciones, lo que Hermez entiende que es una característica clave para la usabilidad.

* El Protocolo Hermez también proporciona una garantía de que las transacciones de los usuarios no se pueden censurar y que todos los fondos siempre se pueden enviar de vuelta a la capa 1. Las soluciones de la capa 2 aumentan la complejidad para los usuarios, pero el enfoque del proyecto Hermez es proporcionar la mejor usabilidad posible para la incorporación de usuarios. 

### Pruebas RCP
Para agregar el RCP en Metamask ha resultado sencillo, la experiencia ha sido tanto manual como automática y sólo deberemos seguir los pasos [Oficiales Manueales](https://wiki.polygon.technology/docs/zkEVM/develop/#connecting-to-zkevm) o [Oficiales Automática](https://public.zkevm-test.net/) y le damos directamente `add Metamask`, el cual mostrará en nuestra Metamask directamente los datos necesarios para tener configurada la red, también puede seguir la guía oficial desde el equipo de [Zk-EVM-Polygon](https://polygon.technology/blog/your-three-step-guide-to-using-polygon-zkevm-yes-its-that-easy).

### Pruebas Faucet

En zkEVM Polygon para conseguir faucet podemos usar directamente cualquiera de Goerli, aquí os dejamos algunos de ellos pero si quieres tenerlos todos desde un sólo sitio te recomiendo visitar y probar [Faucet Link](https://faucetlink.to/goerli), en el también podrá ver una compartiva de los procedimientos para poder reclamar los `ETH` de prueba.

* [Faucet Alchemy](https://goerlifaucet.com/)
* [Faucet Mudit](https://goerli-faucet.mudit.blog/)

### Pruebas Bridge

Hemos enviado por el [Bridge zkEVM-Polygon](https://public.zkevm-test.net/) desde Goerli L1 a testnet-zkEVM-mago, la cantidad de [0.01 ETH](https://goerli.etherscan.io/tx/0xe95f6ef795215f402327abc2748842ac8070dfbed4fc47362ba78b975e1db18b) (0.002206758437339412 Ether = 2.86 usd ). Luego deberemos cambiar a nuestra nueva red de zkEVM-Polygon y [SÓLO aceptar el envío sin fee](https://explorer.public.zkevm-test.net/tx/0x351e744c9957a77a0c9e962fcd8000ef6ba48ea2e8023aa3cbe3c10d4c9cca59)(0 Ether = 0 usd) 

### Pruebas Deploy

El deploy ha sido desde Remix, no habido ninguna complicación solo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RCP de zkEVM-Polygon sin tener ningun tipo de inconveniente.

* [Deploy  zkEVM-Polygon](https://explorer.public.zkevm-test.net/tx/0x52cf30f4289cdf5331f116bdb55ca1f63cc4571799616bd97ab431cfbacf7932)
* [Token Contract](https://explorer.public.zkevm-test.net/token/0xE391fC071fc166953502E6368B7FE713691A9B79/token-transfers)

### Pruebas Fee

Probamos a enviar desde zkEVM-Polygon entre wallets 500 L2Pol , el envio fue casi instantáneo y el fee (0.000052211 Ether = 0.07 usd)

* [Hash envio SczkEVM-Polygon](https://explorer.public.zkevm-test.net/tx/0xf2359dfc476a80a599e9d753a5d114900b9a77d87a2b35ab32f4cb82ef926403)


---

# Zk-Sync

Para agregar el RCP en Metamask ha resultado sencillo, la experiencia ha sido tanto manual como automática y sólo deberemos seguir los pasos [Oficiales Manuales](https://v2-docs.zksync.io/dev/troubleshooting/important-links.html#testnet-network-info) o [Oficiales Automática]() y le damos directamente `add Metamask`, el cual mostrará en nuestra Metamask directamente los datos necesarios para tener configurada la red.

### Faucet

En zk-Sync2.0 para conseguir faucet podemos usar directamente cualquiera de Goerli, aquí os dejamos algunos de ellos pero si quieres tenerlos todos desde un sólo sitio te recomiendo visitar y probar [Faucet Link](https://faucetlink.to/goerli), en el también podrá ver una compartiva de los procedimientos para poder reclamar los `ETH` de prueba, luego tendrá que usar el `Bridge` para enviarlo de Goerli hacia zkSyn2.0. 

También podrá desde [zk-Sync reclamar el faucet](https://portal.zksync.io/faucet) siguiendo los pasos e interactuando con Twitter, aunque tardó en llegar, en mi caso entre 2-20 horas y tuve que hacer dos pedidos, pero al final llegó un envio con un combo de [(Link, Dai, Ether, Usdc y Wbtc)](https://zksync2-testnet.zkscan.io/address/0x3AC83946966B5E2cf4BB24d807a0Dd8232fea4ea/tokens). No era demasiado la cantidad de `ETH` para poder hacer el Deploy, así que mejor usar el [Bridge](https://portal.zksync.io/bridge/) desde Goerli hacia zk-Sync2.0.

* [Faucet Alchemy](https://goerlifaucet.com/)
* [Faucet Mudit](https://goerli-faucet.mudit.blog/)

### Bridge

Hemos enviado por el [Bridge zk-Sync2.0](https://portal.zksync.io/bridge) desde Goerli L1 a zk-Sync, la cantidad de [0.03 ETH](https://goerli.etherscan.io/tx/0xf059474ab4b3834ea67806da73803c7cdea82795f1d282fcd5cf2105246ef56b) (0.004061343032894745 Ether = 5.2 usd). Solo hemos necesitado un paso para recibir nuestros `ETH` en zk-Sync2.0.

### Deploy

El deploy ha sido complejo, no nos vale con simple copia y pega en remix y alguna libreria de Open Zepelin, aquí deberemos usar su [Guía Oficial](https://v2-docs.zksync.io/api/hardhat/getting-started.html#project-setup) para usar sus SDK y poder deployar el contrato. También hemos tenido problemas para hacer la verficación, así como poder conseguir desplegar este contrato de ERC-20 dado que no hemos podido usar los métodos de `Remix` de copia-pega y añadir algunas librerias como hicimos con las otras pruebas.

* [Deploy  zkEVM-zkSync](https://goerli.explorer.zksync.io/tx/0x076134b601d20b4acf8786dd33e6d448a81a5fc305655e65ddcd58fc7ac61086)
* [Token Contract](https://goerli.explorer.zksync.io/address/0x02A545CF2b2AFe6730420b7Bd22cC9C2E6Da413E#events)

### Fee

Probamos a enviar desde zkEVM-zkSync2.0 entre wallets 500 L2Pol, el envio fue casi instantáneo y el fee (0.0003730602 ETH = 0,481 usd)

* [Hash envio SczkEVM-Polygon](https://goerli.explorer.zksync.io/tx/0x7bccce08efc978735e01b650af72f087f1b458a65b613a15e5e1c3cd2f87db07)



----

# Consensys

Agregar RCP en MM desde aquí, pero hay que crear rcp desde infura, registrarse y pedir el whitlis, luego añadir su api key

https://consensys.net/docs/zk-evm/en/latest/get-started/configure-metamask/

https://goerli.zkevm.consensys.net/

https://www.infura.io/resources/network/consensys-zkevm-beta-signup

Y esperar a que te acpeten 



## Intro

Scroll, ya que Taigo A1 utiliza un algoritmo de consenso de prueba de participación delegada (DPoS), mientras que Scroll utiliza un algoritmo de consenso de prueba de estaca (PoS).

En un sistema de consenso de prueba de participación delegada (DPoS), los participantes votan para elegir a un grupo de validadores que se encargan de validar las transacciones y los bloques, y estos validadores reciben una recompensa por su trabajo. Esto significa que, en teoría, el costo de transacción en una red basada en DPoS debería ser más bajo debido a la menor cantidad de recursos necesarios para validar las transacciones.
Sin embargo, el costo de transacción en Taigo A1 puede ser mayor en comparación con Scroll debido a la menor cantidad de validadores en la red, lo que significa que hay menos competencia entre ellos para procesar transacciones.

En un sistema de consenso de prueba de estaca (PoS), los participantes proporcionan su propia capacidad de procesamiento (llamada "estaca") para validar transacciones y bloques, y reciben una recompensa por hacerlo. En general, en un sistema PoS, el costo de transacción suele ser más alto debido a que se requiere más capacidad de procesamiento para validar transacciones. Sin embargo, en casos como Scroll, el protocolo ha sido diseñado para ser más eficiente en el uso de recursos y puede tener un costo de transacción más bajo en comparación con otras implementaciones de PoS.

En general, es importante tener en cuenta que el costo de transacción puede variar dependiendo de la congestión de la red y la competencia entre los validadores. 

## Zk Sync

mkdir zkSync
cd zkSync
yarn init -y
yarn add -D typescript ts-node ethers zksync-web3 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy

yarn add -D typescript ethers zksync-web3 @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy

npm i --save-dev typescript ts-node ethers zksync-web3 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy

yarn run compile

yarn hardhat deploy-zksync

Deploy =  https://goerli.explorer.zksync.io/tx/0x7bccce08efc978735e01b650af72f087f1b458a65b613a15e5e1c3cd2f87db07

https://goerli.explorer.zksync.io/address/0x02A545CF2b2AFe6730420b7Bd22cC9C2E6Da413E#events

npx hardhat flatten ./contracts/zkEVM-ZkSync.sol > flattenedzkEVM-ZkSync.sol

envio de 500 (0.0003730602 ETH = xxxxxxxx)

https://goerli.explorer.zksync.io/tx/0x7bccce08efc978735e01b650af72f087f1b458a65b613a15e5e1c3cd2f87db07

image.png



ETH