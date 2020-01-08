import React from "react";
import axios from "axios";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stream_key: ""
    };

    this.generateStreamKey = this.generateStreamKey.bing(this);
  }

  componentDidMount() {
    this.getStreamKey();
  }

  generateStreamKey(e) {
    axios.post("/settings/stream_key").then(res => {
      this.setState({
        stream_key: res.data.stream_key
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h4>Streaming Key</h4>
          <hr className="my-4" />

          <div className="col-xl-12 col-sm-12 col-md-8 col-lg-6">
            <div className="row">
              <h5>{this.state.stream_key}</h5>
            </div>
            <div className="row">
              <button
                className="btn btn-dark mt-2"
                onClick={this.generateStreamKey}
              >
                Gerar uma nova chave
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h4>How to Stream</h4>
          <hr className="my-4" />

          <div className="col-12">
            <div className="row">
              <p>
                Pode acessar isso aqui{" "}
                <a target="_blank" href="https://obsproject.com/pt-br">
                  OBS
                </a>
                ou{" "}
                <a target="_blank" href="https://www.xsplit.com/pt-br/">
                  Xplits
                </a> to Live Stream. Se você estiver usando o OBS, vá para Configurações> Fluxo e selecione Personalizado no menu suspenso. Digite <b> rtmp: //127.0.0.1: 1935 / live </b> no campo de entrada do servidor. Além disso, adicione sua chave de fluxo. Clique em Aplicar para salvar.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
