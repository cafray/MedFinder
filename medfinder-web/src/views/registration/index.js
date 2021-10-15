import React from 'react'
import Logo from '../../assets/logo-white.png'
import Illustration from '../../assets/illustration.png'
import Header from '../../components/header'
function Registration() {
    return (
        <div className="container-fluid h-100 bg-primary">
            <Header whiteVersion/>
        <div className="row">
          <div className="col-6 text-right my-auto">
            <img src={Illustration} className="img-fluid" />
          </div>
          <div className="col-6">
            <div className="box col-8">
              <h2 className="text-center">
                Find the meds you need in seconds
              </h2>
              <br />
              <br />
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Nome completo"
          
              />
  
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="E-mail"
        
              />
  
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Telefone"
               
              />
  
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="CPF"
              
              />
  
              <input
                type="date"
                className="form-control form-control-lg mb-3"
                placeholder="Data de Nascimento"
               
              />
  
              <button
                className="btn btn-lg btn-block btn-secondary"
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Registration
