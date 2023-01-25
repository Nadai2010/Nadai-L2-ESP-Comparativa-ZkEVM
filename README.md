<div align="center">
  <h1 style="font-size: larger;">
  <strong>Nadai L2-ESP Comparativa entre zkEVM</strong> 
  </h1>
</div>

<div align="center">
  <h1 style="font-size: larger;">
  <img src="/im%C3%A1genes/evm.gif" width="50" height="50">
  <strong>¿Qúe son las zkEVM? </strong> 
  <img src="/im%C3%A1genes/evm.gif" width="50" height="50">
  </h1>
</div>

Feliz año 2023, que mejor forma de empezar que con una comparación entre las `zkEVM` a modo usuario, técnicos y experiencias en algunas pruebas realizadas. Entre ellas compararemos **`5 (Taiko, Scroll, zkSync 2.0, Polygon zkEVM y ConsenSys)`** y como nos ha resultado la experiencia de acceder a estas testnet, agregar sus RPC, conseguir faucet, tablas de fee e inclusive veremos como ha ido la experiencia en desarrollar nuestros propios ERC20 con contratos Standard desde [OpenZeppelin Wizard](https://wizard.openzeppelin.com/) y luego deployandolos en Remix.

Pero primero hablemos un poco sobre ella, `la zkEVM` [(Artículo de Vitalik Buterin)](https://vitalik.ca/general/2022/08/04/zkevm.html), es una máquina virtual compatible con `EVM` (Ethereum Virtual Machine) que admite el cálculo de prueba de conocimiento cero `(zk o zero-knowledge)`, para ocultar la información del contrato y las transacciones relacionadas. Esto significa que los participantes en la red pueden verificar la validez de una transacción sin necesidad de conocer su contenido exacto. A diferencia de las máquinas virtuales regulares, un zkEVM prueba la corrección de la ejecución del programa, incluida la validez de las entradas y salidas utilizadas en la operación.

![Graph](/im%C3%A1genes/zkemv.png)

Existen varias implementaciones de zkEVM disponibles en el mercado, cada una con sus propias características y ventajas. A continuación describiremos algunas de las implementaciones más conocidas:

* [Taiko:](https://taiko.xyz/) Los zk Rollups equivalentes a Ethereum, a veces llamados zkEVM, son el santo grial de las soluciones de escalado de capa 2, ya que no comprometen la seguridad ni la compatibilidad. En lenguaje reciente, Taiko pretende ser un zkEVM de tipo 1 , que prioriza la equivalencia perfecta de EVM/Ethereum sobre la velocidad de generación a prueba de ZK.

* [Scroll:](https://scroll.io/) Scroll es otra implementación de zkEVM. La solución nativa de escalado zkEVM para Ethereum Scroll es un zkRollup basado en zkEVM en Ethereum que permite la compatibilidad nativa para las aplicaciones y herramientas de Ethereum existentes.

* [Polygon zkEVM:](https://polygon.technology/solutions/polygon-zkevm) La Polygon zkEVM es una implementación de zkEVM desarrollada por el equipo de Polygon. Es la una solución de escalado de conocimiento cero `(zk o zero-knowledgezk o zero-knowledge)`, que es totalmente compatible con Ethereum. Todos los contratos inteligentes, herramientas de desarrollo y billeteras existentes funcionan a la perfección. El zkEVM aprovecha el poder de las pruebas ZK para reducir el costo de transacción y aumentar enormemente el rendimiento, todo mientras hereda la seguridad de Ethereum L1.

* [zkSync 2.0:](https://zksync.io/) zkSync 2.0 es una implementación de zkEVM desarrollada por el equipo de Matter Labs. Es un rollup de conocimiento cero `(zk o zero-knowledge)` que admite la compatibilidad generalizada de EVM para la cadena de bloques de Ethereum. El principal beneficio de zkSync 2.0 es que los desarrolladores que han creado EVM dApps pueden migrar a zkSync 2.0 sin esfuerzo y obtener tarifas de gas significativamente más bajas y más transacciones por segundo mientras heredan la seguridad y la descentralización de Ethereum.

* [ConsenSys zkEVM:](https://goerli.zkevm.consensys.net/) Es una implementación de zkEVM desarrollada por ConsenSys, es una máquina virtual Ethereum de conocimiento cero `(ZK)` de tipo 2. Un zkEVM replica el entorno de Ethereum como un paquete acumulativo y permite a los desarrolladores desarrollarlo como lo harían en la red principal de Ethereum. La red ConsenSys zkEVM le permite implementar cualquier contrato inteligente, usar cualquier herramienta y desarrollar como si estuviera construyendo en Ethereum. Para los usuarios, esto permite la experiencia y las garantías de seguridad de Ethereum, pero con costos de transacción más bajos.

Sin embargo, es importante tener en cuenta que estas tecnologías aún son muy nuevas y se encuentran en una fase temprana de desarrollo, por lo que todavía se requiere más investigación y desarrollo antes de poder determinar si son viables a largo plazo. Por lo que decidimos empezar a testearla y compartir los resultados. Siempre tener en cuenta que los costes obtenidos pueden variar dependiendo de la congestión de la red, linea de tiempo distinta para pruebas, competencia entre los validadores u otras datos aunque se han hecho cogiendo la media de las últimas 25 páginas de transacciones para tener algo más aproximado sobre la actividad de cada red, también hemos apreciado que algunos calculos de `USD` en `Metamask` son **INCORRECTOS**, por lo que los cálculos están directos de las transacciones en la siguiente tabla.

![Graph](/im%C3%A1genes/Tabla.png)

* `RPC`: Es el punto de acceso para interactuar con la red y puede variar dependiendo de la implementación de zkEVM. Hemos añadido la forma de agregar que hemos encontrado oficialmente.
* `Faucet`: Es un servicio que permite obtener fondos gratuitos para probar la red y puede variar dependiendo de la implementación de zk-EVM. Hemos agregado el tipo de verificación necesaria para recibirlos.
* `Bridge`: Es un servicio que permite conectar dos o mas redes blockchain y puede variar dependiendo de la implementación de zk-EVM. Hemos añadido los pasos necesarios en cada bridge, asi como su velocidad y facilidad en el proceso.
* `Whitelist:` Es un mecanismo de seguridad que permite especificar un conjunto de direcciones de billetera autorizadas para realizar transacciones en un contrato inteligente o en una red blockchain. Hemos añadido las whitelist, el `*` hace referencia a un registro y autorización previo de ConSensys para poder acceder a la API de infura y poder añadir el RCP.
* `Explorador:` Es una herramienta que permite ver el estado actual de la red y puede variar dependiendo de la implementación de zk-EVM. Hemos medido la actividad de transacciones por bloques, tiempo y precios decada red.
* `Deploy:` Es el proceso de desplegar un contrato en la red y puede variar dependiendo de la implementación de zk-EVM. Hemos evaluado los que han sido completamente igual que en `ETH`, y los que no sha resultado más complejo.
* `Fee/TX:` Es el costo de transacción y puede variar dependiendo de la congestión de la red y la competencia entre los validadores. Hemos anotado la cantidad de Fee de una transacción de enviar `500 Token ERC20` deployados en cada red a otra wallet.
* `Fee/BR`: Es el costo de transacción y puede variar dependiendo de la congestión de la red y la competencia entre los validadores. Hemos anotado la cantidad de Fee de una transacción de enviar por el BRIDGE correspondiente de cada solución hacia su Layer 1.
---

<div align="left">
  <h1 style="font-size: larger;">
     <strong> 🥁 Taiko</strong> 
 </h1>
</div> 

## Principios de Taiko

Según los documentos oficiales de Taiko debajo de la capa 1 está la capa 0, la gente. Las cadenas de bloques son construidas por personas, y lo que les importa a estas personas se integra en el contrato social, en el código y en el diseño general. 

Tenemos buenas razones para ceñirnos al ejemplo y la especificación de Ethereum; no es sólo por mero amor al protocolo y al pueblo. Es porque es el único ecosistema que nos da lo que nos importa y una oportunidad de cambiar el mundo para mejor, especialmente para aquellos que más lo necesitan. Esto suena elevado, pero esos son los objetivos de la comunidad Ethereum y de Taiko.

A continuación, compartimos los principios de Taiko, tres principios básicos que nos guían.

1. `Accesible:`Cualquiera que quiera usar, desarrollar o participar en Taiko puede hacerlo. Este es el caso porque las tarifas de transacción son económicas y el rendimiento es alto; la experiencia del desarrollador es sólida y la migración de dapp de Ethereum es perfecta; la red no tiene permisos y reutiliza la infraestructura de Ethereum al máximo. No se puede tener libertad sin acceso.

2. `Inclusivo:` Taiko es resistente a la censura y no puede excluir grupos o individuos. El resumen está descentralizado: depende de Ethereum para la disponibilidad y seguridad de los datos; y sin permiso, lo que permite que cualquier participante, usuario o constructor de la red se suscriba. No hay roles especiales que puedan censurar usuarios/aplicaciones/transacciones. Solo estamos interesados ​​en construir sistemas justos y creíblemente neutrales.

3. `Abierto:` Taiko es completamente de código abierto y está centrado en la comunidad. Construimos sobre los hombros de gigantes y apreciamos contribuir de nuevo al progreso técnico y la comunidad de Ethereum. Valoramos las contribuciones de la comunidad al proyecto, aprovechando las mejores mentes e ideas que están interesadas en el espacio. El tipo de actividad que Taiko ejecuta y asegura exige transparencia.

### Pruebas RPC

Para agregar el RPC en Metamask ha resultado sencillo, aunque la experiencia ha sido manual, para ello deberemos de ir a Metamask, Redes y Agregar otras Redes. Puede consultar documentación oficial y como agregarla desde [aquí](https://taiko.xyz/docs/alpha-1-testnet/configure-wallet)

### Pruebas Faucet

En Taiko para conseguir faucet podemos usar nuestro Twitter desde el link oficial y luego compartir nuestro enlace para verificar y recibir ETH de prueba. Nos valdrá el mismo tweet para conseguir faucet en [L1](https://l1faucet.a1.taiko.xyz/) y en [L2](https://l2faucet.a1.taiko.xyz/).

### Pruebas Bridge

Hemos enviado por el [Bridge Taiko](https://bridge.a1.taiko.xyz/) desde Ethereum A1 a Taiko A1 la cantidad de [0.05 ETH](https://l1explorer.a1.taiko.xyz/tx/0x61967b34488a16f5ef7a72f9c918d8b8185047aa6e24363f44c7994a4beaf467) (0.002646895244654985 Ether = 3.45 usd ) la cual hemos tenido que hacer un Claim para poder pagar los fee desde el cual me ha [🟡 fallado 3 veces](https://l2explorer.a1.taiko.xyz/tx/0xff3746a3ba5c0ae61bab1aa56e3c471f35b466d8eb81d3ab561dbde1fff42108), a la cuarta le tripliqué el gas manual `3.000.000 gas limit` para probar y la transacción [se confirmó](https://l2explorer.a1.taiko.xyz/tx/0xc5897ae22b975b9564a576e785f7d70c44792b7df16019c6c134fdc869d68cb1) pero a un fee final de (0.002165108 Ether = 2.88 usd) frente a 8 usd que marcaba nuestra wallet.

### Pruebas Deploy

El deploy ha sido desde Remix, no habido ninguna complicación solo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RPC de Ethereum A1 como Taiko A1 concecutivamente sin tener ningun tipo de inconveniente.


* [Deploy Ethereum A1](https://l1explorer.a1.taiko.xyz/tx/0x09730dafd4f688999eb3ccc95e3159ddd3d33f9d713f7e03aac379161e8a9138)
* [Token Contract L1](https://l1explorer.a1.taiko.xyz/token/0xE391fC071fc166953502E6368B7FE713691A9B79/token-transfers)

* [Deploy Taiko A1](https://l2explorer.a1.taiko.xyz/tx/0x3fd68713a5a4f04468e09d89d608b0b6095e72d796b025dacf26b1e7808ae798)
* [Token Contract L2](https://l2explorer.a1.taiko.xyz/token/0xA330cF7FDE4F9FE6E36c3909650C72362D360421/token-transfers)

### Pruebas Fee 

Probamos a enviar desde Ethereum A1 entre wallets 500 L2Tai , el envio fue casi instantáneo y el fee (0.002030320255912087 Ether = 2.6 usd)

* [Hash envio Ethereum A1](https://l1explorer.a1.taiko.xyz/tx/0xc2badc0d7112cb8fd5bbab0301dce7efb947a298190f68ab19352583bce24cb6)

Probamos a enviar desde Taiko A1 entre wallets 500 L2Tai , el envio fue casi instantáneo y el fee (0.0001148642 Ether = 0.15 usd)

* [Hash envio Taiko A1](https://l2explorer.a1.taiko.xyz/tx/0x935172cdb25b9e93898d0c20a90e3ddd4b8e3e60de15e6573082fc048a7ff312)

![Graph](/im%C3%A1genes/taiko.png) ![Graph](/im%C3%A1genes/taikoa1.png)

----

<div align="left">
  <h1 style="font-size: larger;">
     <strong> 📜 Scroll </strong> 
 </h1>
</div> 

## Principios de Scroll

Según uno de los [documentos oficiales de Scroll](https://scroll.io/blog/technicalPrinciples#heading-2), se basan en escalar Ethereum con su zkRollup basado en zkEVM, han diseñado Scroll basado en un conjunto de principios técnicos que defienden los valores fundamentales de Scroll. 

1. `Garantizar la seguridad del usuario:` En el contexto de las soluciones de escalado de blockchain, la forma más importante de seguridad se refiere a la integridad de los fondos y datos de los usuarios. Si bien una solución de escalado puede ofrecer a los usuarios capacidades adicionales, creemos que garantizar que los usuarios mantengan el acceso a sus fondos es lo primero. Para Scroll, esto significa que los usuarios no deberían depender de la honestidad de los nodos de la Capa 2 para la seguridad y, en su lugar, pueden aprovechar la seguridad total de la Capa 1 incluso cuando realizan transacciones en la Capa 2. Al desarrollar Ethereum de acuerdo con este principio, estamos arraigando el seguridad de Scroll en el consenso más seguro y descentralizado de la capa base de Ethereum.

2. `Mantener la equivalencia EVM:` Además de brindarles a los usuarios capacidades adicionales, una solución de escalado de Ethereum efectiva debería brindarles a los usuarios y desarrolladores una ruta de migración sin inconvenientes desde las dapps existentes y las herramientas para desarrolladores. Creemos que mantener la equivalencia EVM es la mejor manera de lograrlo. Un entorno equivalente a EVM se comporta exactamente igual que la especificación de la máquina virtual de Ethereum en el documento amarillo de Ethereum . Esto significa que los usuarios y desarrolladores pueden migrar sin cambios de código adicionales, auditorías costosas o cambios disruptivos en su flujo de trabajo de desarrollo.

* La equivalencia de EVM proporciona garantías sustancialmente más sólidas que la simple compatibilidad con EVM a través de soluciones como la transpilación. Conformarse con la mera compatibilidad puede obligar a los usuarios y desarrolladores a modificar o incluso reimplementar por completo grandes porciones de la infraestructura de soporte de Ethereum. Además, mantener la seguridad se vuelve mucho más difícil sin la equivalencia de EVM. Como resultado, para ser lo más fácil posible para el desarrollador y el usuario, **Scroll es equivalente a EVM, no simplemente compatible con EVM.**

3. `Eficiencia:` Para que los usuarios disfruten de una gran experiencia en una Capa 2, creemos que las tarifas de transacción deben ser bajas, órdenes de magnitud más baratas que en la capa base. Los usuarios deberían experimentar una confirmación previa instantánea en la Capa 2 y una finalización razonablemente rápida en la capa base (Ethereum en nuestro caso).

* Si bien estas condiciones son fáciles de satisfacer con un operador centralizado, para preservar la seguridad deben seguir manteniéndose en un entorno descentralizado. En el contexto de la Capa 2, creemos que Scroll debe ser lo más eficiente posible mientras mantiene la seguridad del usuario y la descentralización tanto en la Capa 2 como en la capa base.

4. `Descentralización en todas las capas de la comunidad:` La descentralización es una propiedad central de las cadenas de bloques que a menudo se pasa por alto o se intercambia de manera inadecuada por eficiencia. Creemos que es uno de los aspectos más valiosos de las cadenas de bloques y garantiza que los protocolos y las comunidades sean vibrantes y resistentes frente a la censura o los ataques coordinados. Consideramos la descentralización en muchos aspectos de Scroll, incluidos los operadores de nodos, los probadores y la comunidad de desarrolladores y usuarios. Al construir abiertamente con la comunidad y trazar un camino creíble para descentralizar tanto la prueba como la secuenciación, Scroll se compromete a garantizar la descentralización en todas las dimensiones.

#### Pruebas RPC

Para agregar el RPC en Metamask ha resultado sencillo, la experiencia ha sido automática y sólo deberemos darle a `add Metamask` desde los [documentos oficiales](https://scroll.io/prealpha/), el cual mostrará en nuestra Metamask directamente los datos necesarios para tener configurada [Scroll](https://scroll.io/) en nuestra billetera.

#### Pruebas Faucet

En Scroll para conseguir faucet en L1 tendremos que ir su página de [Faucet](https://scroll.io/prealpha/faucet), verificar un captcha, poner nuestra wallet para recibir `1 ETH` y `100 TSUSDC` de prueba. Para L2 no hay faucet, así que se debe usar el bridge para recibir nuestros tokens en L2.

#### Pruebas Bridge

Hemos enviado por el [Bridge Scroll](https://scroll.io/prealpha/bridge) desde Scroll L1 a Scroll L2 la cantidad de [0.5 ETH](https://l1scan.scroll.io/tx/0xdfe42a882b64023047260de6207669c86e9aa7a4bb58370d96ebc485c71b492c) (0.000173922000927584 Ether = 0.22 usd ), todo ha sido en un sólo paso sin tener que interactuar desde L2.

#### Pruebas Deploy

El deploy ha sido desde Remix y no ha habido ninguna complicación, sólo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RPC de Scroll Testnet L1 como Scroll Testnet L2 concecutivamente sin tener ningun tipo de inconveniente.


* [Deploy  Scroll Testnet L1](https://l1scan.scroll.io/tx/0xdfadf91159cf13fa6e3466cf541ec2b464df7232bfc3f772c8631a8bc48dea50)
* [Token Contract L1](https://l1scan.scroll.io/token/0xE391fC071fc166953502E6368B7FE713691A9B79/token-transfers)

* [Deploy  Scroll Testnet L2](https://l2scan.scroll.io/tx/0x44b01b272fab0360c9465a5dfc5be95cf4eb2b5ea4072446880c6ec82f9fd35c)
* [Token Contract L2](https://l2scan.scroll.io/token/0xA330cF7FDE4F9FE6E36c3909650C72362D360421/token-transfers)

### Pruebas Fee

Probamos a enviar desde Scroll L1 entre wallets 500 L2Sco , el envio fue casi instantáneo y el fee (0.000078316500417688 Ether = 0.10 usd)

* [Hash envio Scroll L1](https://l1scan.scroll.io/tx/0x72f101d80c2bd690de3f9a22fe1c5f525b1485f85332d288142a831681cec28c)

Probamos a enviar desde Taiko A1 entre wallets 500 L2Tai , el envio fue casi instantáneo y el fee (0.0001148642 Ether = 0.15 usd)

* [Hash envio Scroll L2](https://l2scan.scroll.io/tx/0xf3e35b7e12b6b5788e059523e7b77707acc2cfcf8a62e6d202215a4dd6325395)

![Graph](/im%C3%A1genes/scroll.png) ![Graph](/im%C3%A1genes/scroll2.png)

----

<div align="left">
  <h1 style="font-size: larger;">
   <img src="imágenes/polygon.png" width="25">
   <strong>   Polygon zkEVM      </strong> 
  </h1>
</div>

## Principios de Polygon zkEVM

Según los [documentos oficiales de Polygon zkEVM](https://polygon.technology/solutions/polygon-zkevm/) se basan en una solución de escalabilidad de Ethereum Layer 2 descentralizada que utiliza tecnología criptográfica de conocimiento cero `(zk o zero-knowledge)` para proporcionar validación y finalización rápida de los cálculos de transacciones fuera de la cadena. Ha sido diseñado y desarrollado para emular la máquina virtual de Ethereum (EVM) al recrear todos los códigos de operación de EVM existentes para una implementación transparente de los contratos inteligentes de Ethereum existentes.

1. Equivalente a EVM: Ethereum no es solo una cadena de bloques. Es un rico ecosistema de contratos inteligentes, herramientas para desarrolladores, infraestructura y billeteras. Es una comunidad vibrante de desarrolladores, auditores y usuarios. La mejor manera de escalar Ethereum es mantener la compatibilidad con este ecosistema, y ​​zkEVM brindará a los usuarios y desarrolladores una experiencia idéntica a Ethereum L1, solo que con una mejora masiva de escalabilidad.

2. Rendimiento: Muchas personas en criptografía creían que un zkEVM estaba a años de distancia y que tal vez nunca fuera práctico o competitivo con otros ZK L2. Esto se enmarcó como una compensación inevitable: podríamos tener compatibilidad total con EVM o alto rendimiento, pero no ambos. Sin embargo, con los avances en los sistemas de prueba promovidos por Polygon Zero, podemos lograr una compatibilidad total con EVM al mismo tiempo que ofrecemos un mejor rendimiento (mayor rendimiento, menor latencia y menor costo) que algunas L1, resúmenes optimistas y otros resúmenes ZK.

El zkEVM lleva a cabo cambios de estado, que provienen de ejecuciones de transacciones de capa 2 de Ethereum que los usuarios envían a la red y, posteriormente, produce pruebas de validez que atestiguan la exactitud de los cálculos de cambio de estado realizados fuera de la cadena.

Aunque adoptar este enfoque de diseño revolucionario fue una decisión difícil de tomar, el objetivo es minimizar la fricción de los usuarios y las dApps al usar la solución. Es un enfoque que requiere la recreación de todos los códigos de operación EVM para el despliegue transparente de los contratos inteligentes de Ethereum existentes. Para este propósito, el equipo ha creado y diseñado un nuevo conjunto de tecnologías y herramientas.


### Pruebas RPC

Para agregar el RPC en Metamask ha resultado sencillo, la experiencia ha sido tanto manual como automática y sólo deberemos seguir los pasos [Oficiales Manuales](https://wiki.polygon.technology/docs/zkEVM/develop/#connecting-to-zkevm) o [Oficiales Automática](https://public.zkevm-test.net/) y le damos directamente `add Metamask`, el cual mostrará en nuestra Metamask directamente los datos necesarios para tener configurada la red, también puede seguir la guía oficial desde el equipo de [Zk-EVM-Polygon](https://polygon.technology/blog/your-three-step-guide-to-using-polygon-zkevm-yes-its-that-easy).

### Pruebas Faucet

En zkEVM Polygon para conseguir faucet podemos usar directamente cualquiera de Goerli, aquí os dejamos algunos de ellos pero si quieres tenerlos todos desde un sólo sitio te recomiendo visitar y probar [Faucet Link](https://faucetlink.to/goerli), en el también podrá ver una compartiva de los procedimientos para poder reclamar los `ETH` de prueba.

* [Faucet Alchemy](https://goerlifaucet.com/)
* [Faucet Mudit](https://goerli-faucet.mudit.blog/)

### Pruebas Bridge

Hemos enviado por el [Bridge Polygon zkEVM](https://public.zkevm-test.net/) desde Goerli L1 a testnet-zkEVM-mago, la cantidad de [0.01 ETH](https://goerli.etherscan.io/tx/0xe95f6ef795215f402327abc2748842ac8070dfbed4fc47362ba78b975e1db18b) (0.002206758437339412 Ether = 2.86 usd ). Luego deberemos cambiar a nuestra nueva red de Polygon zkEVM y [SÓLO aceptar el envío sin fee](https://explorer.public.zkevm-test.net/tx/0x351e744c9957a77a0c9e962fcd8000ef6ba48ea2e8023aa3cbe3c10d4c9cca59)(0 Ether = 0 usd) 

### Pruebas Deploy

El deploy ha sido desde Remix, no habido ninguna complicación solo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RPC de Polygon zkEVM sin tener ningun tipo de inconveniente.

* [Deploy Polygon zkEVM](https://explorer.public.zkevm-test.net/tx/0x52cf30f4289cdf5331f116bdb55ca1f63cc4571799616bd97ab431cfbacf7932)
* [Token Contract](https://explorer.public.zkevm-test.net/token/0xE391fC071fc166953502E6368B7FE713691A9B79/token-transfers)

### Pruebas Fee

Probamos a enviar desde Polygon zkEVM entre wallets 500 L2Pol , el envio fue casi instantáneo y el fee (0.000052211 Ether = 0.07 usd)

* [Hash envio Polygon zkEVM](https://explorer.public.zkevm-test.net/tx/0xf2359dfc476a80a599e9d753a5d114900b9a77d87a2b35ab32f4cb82ef926403)


![Graph](/im%C3%A1genes/pol.png) 

---

<div align="left">
  <h1 style="font-size: larger;">
   <img src="imágenes/zksync.png" width="25">
   <strong>   zkSync 2.0        </strong> 
  </h1>
</div>

## Principios de zkSync 2.0

Según sus [documentos oficiales de zkSync 2.0](https://v2-docs.zksync.io/dev/#fundamental-topics) es un gran paso adelante en las tecnologías de Capa 2. Es una mejora largamente esperada que ofrece muchos beneficios nunca antes disfrutados por los desarrolladores de Ethereum como son:

1. `Compatible con EVM:` zkSync es un zk rollup de conocimiento cero compatible (`zk o zero-knowledge`) con EVM que admite contratos inteligentes de EVM generalizados. Esto significa que si tiene contratos inteligentes EVM, es muy fácil portar su dApp a zkSync 2.0.

2. `Ethos Compatible:`Estamos muy alineados con el ethos de la descentralización y el código abierto. Todo nuestro código se esforzará por ser completamente de código abierto y zkSync ejecutará una hoja de ruta que descentralizará por completo el secuenciador y la generación de pruebas, y ejecutaremos una hoja de ruta de administración sustractiva organizacional, es decir, estaremos descentralizando nuestra organización.

3. `Certeza:` A diferencia de los métodos anteriores que intentan escalar Ethereum, que en algunos casos han ofrecido garantías de seguridad más débiles que para L1 (por ejemplo, cadenas laterales, plasma y optimista), zkSync utiliza pruebas de conocimiento cero que ofrecen certeza de seguridad.

4. `A prueba de futuro:` Los proyectos del ecosistema que adopten zkSync 2.0 ahora disfrutarán de todas las mejoras futuras sin necesidad de cambiar su código, en particular provenientes de:

- La tecnología probador (aceleración de hardware).
- El compilador (integración de lenguajes de programación modernos habilitados para LLVM).
- Todas las novedades de zkSync 3.0 (Hyperchains e Hyperbridges).

Hay mucha confusión entre la comunidad con respecto a los impactos de ser compatible con EVM versus equivalente a EVM. Primero, definamos qué significan los dos.

**Equivalente a EVM** significa que un protocolo determinado admite todos los códigos de operación de EVM de Ethereum hasta el código de bytes. Por lo tanto, cualquier contrato inteligente de EVM funciona con un 100 % de garantía desde el primer momento.

**Compatible con EVM**significa que se admite un porcentaje de los códigos de operación de EVM de Ethereum; por lo tanto, un porcentaje de los contratos inteligentes funcionan de forma inmediata.

zkSync 2.0 está optimizado para ser compatible con EVM y no equivalente a EVM. También puede revisar en sus documentos según ellos las ventajas frente a otros tipos de estas soluciones, si quiere saber más sobre ello vaya [directamente aquí](https://v2-docs.zksync.io/dev/fundamentals/faq.html#zksync-2-0-vs-alternatives)

### Pruebas RPC

Para agregar el RPC en Metamask ha resultado sencillo, la experiencia ha sido tanto manual como automática y sólo deberemos seguir los pasos [Oficiales Manuales](https://v2-docs.zksync.io/dev/troubleshooting/important-links.html#testnet-network-info) o [Oficiales Automática](https://portal.zksync.io/), conectamos nuestra cuenta y le damos directamente `add Metamask`, el cual mostrará en nuestra Metamask directamente los datos necesarios para tener configurada la red.

### Pruebas Faucet

En zkSync2.0 para conseguir faucet podemos usar directamente cualquiera de Goerli, aquí os dejamos algunos de ellos pero si quiere tenerlo todo desde un sólo sitio te recomendamos visitar y probar [Faucet Link](https://faucetlink.to/goerli), en el también podrá ver una compartiva de los procedimientos para poder reclamar los `ETH` de prueba, luego tendrá que usar el `Bridge` para enviarlo de Goerli hacia zkSync 2.0. 

También podrá desde [zk-Sync reclamar el faucet](https://portal.zksync.io/faucet) siguiendo los pasos e interactuando con Twitter, aunque tardó en llegar, en nuestro caso entre 2-20 horas y tuvimos que hacer dos pedidos, pero al final nos llegó un envio con un combo de [(Link, Dai, Ether, Usdc y Wbtc)](https://zksync2-testnet.zkscan.io/address/0x3AC83946966B5E2cf4BB24d807a0Dd8232fea4ea/tokens). No era demasiado la cantidad de `ETH` para poder hacer el Deploy, así que mejor usar el [Bridge](https://portal.zksync.io/bridge/) desde Goerli hacia zkSync 2.0.

* [Faucet Alchemy](https://goerlifaucet.com/)
* [Faucet Mudit](https://goerli-faucet.mudit.blog/)

### Pruebas Bridge

Hemos enviado por el [Bridge zkSync 2.0](https://portal.zksync.io/bridge) desde Goerli L1 a zkSync 2.0, la cantidad de [0.03 ETH](https://goerli.etherscan.io/tx/0xf059474ab4b3834ea67806da73803c7cdea82795f1d282fcd5cf2105246ef56b) (0.004061343032894745 Ether = 5.2 usd). Solo hemos necesitado un paso para recibir nuestros `ETH` en zkSync2.0.

### Pruebas Deploy

El deploy ha sido complejo, no nos vale con simple copia y pega en remix y alguna libreria de OpenZeppelin, aquí deberemos usar su [Guía Oficial](https://v2-docs.zksync.io/api/hardhat/getting-started.html#project-setup) para usar sus SDK y poder deployar el contrato. También hemos tenido problemas para hacer la verficación, así como poder conseguir desplegar este contrato de ERC-20 dado que no hemos podido usar los métodos de `Remix` de copia-pega y añadir algunas librerias como hicimos con las otras pruebas.

* [Deploy zkSync 2.0](https://goerli.explorer.zksync.io/tx/0x076134b601d20b4acf8786dd33e6d448a81a5fc305655e65ddcd58fc7ac61086)
* [Token Contract](https://goerli.explorer.zksync.io/address/0x02A545CF2b2AFe6730420b7Bd22cC9C2E6Da413E#events)

### Pruebas Fee

Probamos a enviar desde zkEVM-zkSync2.0 entre wallets 500 L2Pol, el envio fue casi instantáneo y el fee (0.0003730602 ETH = 0,481 usd).

* [Hash envio zkSync 2.0](https://goerli.explorer.zksync.io/tx/0x7bccce08efc978735e01b650af72f087f1b458a65b613a15e5e1c3cd2f87db07)

![Graph](/im%C3%A1genes/sync.png)

----

# ConsenSys zkEVM

## Principios de ConsenSys zkEVM

La red [ConsenSys zkEVM](https://goerli.zkevm.consensys.net/) es un nuevo zk rollup, diseñado por ConsenSys R&D y operado por ConsenSys. El zk rollup es la culminación de años de investigación y ofrece compatibilidad total con Ethereum Virtual Machine (EVM), por lo que los desarrolladores pueden implementar y administrar aplicaciones usando herramientas familiares como MetaMask, Truffle e Infura como si estuvieran usando Ethereum directamente. 

Los usuarios podrán unir activos entre la red de prueba de Goerli y zkEVM para probar sus contratos inteligentes y dapps utilizando las herramientas, la infraestructura y las billeteras con las que están familiarizados. La integración lista para usar con la cadena de herramientas de Ethereum existente permite la experiencia, la seguridad y la descentralización de Ethereum pero con tarifas de transacción ultrabajas. 

La nueva red de prueba beta privada ConsenSys zkEVM, equivalente a EVM, ya está disponible en Infura para los solicitantes seleccionados. Los participantes de Testnet podrán unir activos entre Goerli testnet y zkEVM para probar sus contratos inteligentes, dapps utilizando las herramientas, la infraestructura y las billeteras con las que están familiarizados. La integración lista para usar con las herramientas Ethereum existentes permite la experiencia, la seguridad y la descentralización de Ethereum pero con tarifas de transacción ultrabajas.  

![Graph](/im%C3%A1genes/api.png)

Después un tiempo nos dieron permiso para poder acceder y agregar la RPCy empezamos a testearla.

### Pruebas RPC

Para agregar el RPC en Metamask ha resultado sencillo una vez tenemos la whitelist de Infura para poder darnos el endpoint. La experiencia ha sido manual, para ello deberemos de ir a Metamask, Redes y Agregar otras Redes. Puede consultar documentación oficial y como agregarla desde [aquí](https://consensys.net/docs/zk-evm/en/latest/get-started/configure-metamask/)

### Pruebas Faucet

En ConsenSys zkEVM para conseguir faucet podemos usar directamente cualquiera de Goerli, aquí os dejamos algunos de ellos pero si quiere tenerlo todo desde un sólo sitio te recomendamos visitar y probar [Faucet Link](https://faucetlink.to/goerli), en el también podrá ver una comparativa de los procedimientos para poder reclamar los `ETH` de prueba, luego tendrá que usar el `Bridge` para enviarlo de Goerli hacia ConsenSys zkEVM, también podra conseguir `10 USDC` desde [aquí oficialmente](https://bridge.goerli.zkevm.consensys.net/faucet?token=USDC&sourceNetwork=ethereum&destNetwork=consensys) pero deberá tener saldo de `ETH` en su cuenta para poder pagar el mint de esos USDC. 

* [Faucet Alchemy](https://goerlifaucet.com/)
* [Faucet Mudit](https://goerli-faucet.mudit.blog/)

### Pruebas Bridge
 
Hemos enviado por el [Bridge ConsenSys](https://bridge.goerli.zkevm.consensys.net/) desde Goerli hacia ConsenSys zkEVM la cantidad de [0.05 ETH](https://goerli.etherscan.io/tx/0x7634ff45653e11dc2fcbeba437e458e96240ba0f40fa09ffc0f8155ee00f1bd5) (0.000091611002565108 Ether = 0.12 usd ) se ha quedado el rele con 0.01 del envío, del resto todo ha sido en un sólo paso sin tener que interactuar desde L2.

### Pruebas Deploy

El deploy ha sido desde Remix, no habido ninguna complicación solo hemos cambiado el nombre del contrato para hacer un nuevo compile. Hemos conectado nuestro Metamask pero usando tanto el RPC de ConsenSys zkEVM sin tener ningun tipo de inconveniente. 


* [Deploy ConsenSys zkEVM](https://explorer.goerli.zkevm.consensys.net/tx/0x629e1347f4b1e218999d26baf22eafe26ff280fa3a63b0625063cd306e0a0b37)
* [Token Contract L2](https://explorer.goerli.zkevm.consensys.net/address/0xA330cF7FDE4F9FE6E36c3909650C72362D360421)


### Pruebas Fee 

Probamos a enviar desde ConsenSys zkEVM entre wallets 500 L2Cons , el envio fue casi instantáneo y el fee (0.000126611675365477 Ether = 0.16 usd)

* [Hash envio ConsenSys zkEVM](https://explorer.goerli.zkevm.consensys.net/tx/0xd82a4fb291efb2d2866cf1105486f1ee52791538945716b0f23950e032e1ad5b)

![Graph](/im%C3%A1genes/cons.png) 

----

### Agradecimientos

Si han llegado hasta aquí es que de verdad están interesados en las soluciones de zkEVM, con él hemos querido reforzar el poder de este tipo de soluciones así como una pequeña comparativa general de algunas de ellas. Si aún así siguen interesados y con ganas de aportar o aprender con nosotros no duden en unirse a las gran comunidad de [Telegram L2 Español](https://t.me/l2espaniol) y nuestro [Twitter](https://twitter.com/Layer2es), allí podra encontrar mucha información sobre Layer 2 y sobre el ecosistema Blockchain en global.

Espero que les haya gustado, si quieren realizar pruebas en las diferentes redes o ver los códigos utilizados para la creación de este documento, visite la repo oficial [Nadai](https://github.com/Nadai2010) o el [Documento completo Nadai L2ESP Comparativa de zkEVM](https://github.com/Nadai2010/Nadai-L2-ESP-Comparativa-ZkEVM)
