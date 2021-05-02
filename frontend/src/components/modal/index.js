import React from 'react';

import check from '..//assets/imgs/check.png';


<div className="modal">
  <div className="container">
    <div className="modal-body">
      <img src={check} />
      <h4>Pedido efetuado com sucesso</h4>
      <p>Você será notificado(a) assim que um(a) de nossos(as) parceiros(as) estiver indo retirar a sua encomenda no endereço de origem.</p>
      <div className="button-wrapper">
        <Link to="/encomendas" className="button-primary">Fechar</Link>
      </div>
    </div>
  </div>
</div>