import React from 'react';
import {ImgCardGrande, InfosCardGrande, TituloCardGrande, LayoutCardGrande} from './styles'


export function CardGrande(props) {

    return (
        <LayoutCardGrande>
            <ImgCardGrande src={props.imagem} />
            <InfosCardGrande>
                <TituloCardGrande>{props.nome}</TituloCardGrande>
                <p>{props.descricao}</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}
