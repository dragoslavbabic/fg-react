import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  

const Caplja = () => {
    return(
        <div className="col-md-6">

<Card>
<CardImg top width="50%" src="/images/crvena-caplja.jpg" alt="Card image cap" />
<CardBody>
  <CardTitle>Crvena čaplja</CardTitle>
  <CardSubtitle>Card subtitle</CardSubtitle>
  <CardText>Stanovnik Fruške gore je i crvena čaplja (lat. Ardea purpurea), poznatija kao čaplja danguba, čaplja mrka, ili zmijar ptica. Dosta velika ptica, koja je visoka od 80-90 cm, a duga otprilike isto toliko. Teška je 0.5-1.3 kg, a raspon krila dostiže od 120-150 cm. Nešto je manja od sive čaplje, od koje se razlikuje po svom crvenkastosmeđem perju, i kod odraslih, tamnije sivim leđima. Ima uži žuti kljun, koji je kod odraslih svetliji za vreme sezone parenja. Purpurno-crvene nijanse na perju teško se vide s daljine, kada izgleda nešto tamnija od sive čaplje. Glava i vrat su uži i vijugaviji, a stopala veća. Hranu nalazi u plitkoj vodi i hrani se najčešće malim ribama, žabama, insektima, malim sisarima, gmizavcima i pticama.
Oprezan je i vešt lovac koji nepomično čeka plen. Zauzima pozu za skrivanje kao ptica bukavac. Spor je letač, a dok leti vrat joj je uvučen i izgleda zmijoliko poprimajući oblik slova S.</CardText>
  <Button>Button</Button>
</CardBody>
</Card>
</div>
    )
}

export default Caplja;