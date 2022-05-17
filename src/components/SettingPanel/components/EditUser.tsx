import Avatar from '@components/Avatar/Avatar'
import React, { FC } from 'react'
import { UserInfoType } from 'types/UserInfo'

export interface EditUserProps {}

const EditUser: FC<EditUserProps> = (): JSX.Element => {
    const user: UserInfoType = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Dnny',
        lastName: 'Brown',
    }
    return (
        <>
            <Avatar
                user={user}
                rounded
                size='2xl'
                className='margin-auto u-margin-top-s'
            />
            <p>
                Occaecat magna nulla dolor labore esse ea. Ea excepteur esse
                dolor labore tempor proident mollit qui duis. Eu eiusmod laboris
                reprehenderit non sit. Ex duis nostrud ullamco dolore et
                pariatur proident. Pariatur voluptate mollit irure dolor laboris
                officia dolore in magna irure excepteur. Adipisicing
                reprehenderit consectetur anim sunt consectetur. Officia anim
                tempor excepteur ipsum consectetur ipsum velit enim commodo.
                Duis ad tempor sint duis esse id. Ut voluptate elit enim qui
                incididunt aute fugiat. Mollit culpa nisi consequat Lorem
                nostrud labore exercitation proident aliquip nisi velit sit.
                Nulla ex in eu eiusmod id deserunt consectetur adipisicing aute.
                Aliqua exercitation deserunt Lorem eu magna officia. Magna in
                consectetur ipsum ullamco velit proident dolore. Enim mollit
                velit anim velit aute. Dolor commodo pariatur tempor id. Ad est
                laborum officia ex aliquip. Sit ea deserunt officia ad
                cupidatat. Qui minim do ut magna enim esse enim nostrud
                incididunt nostrud aliqua laborum officia. Tempor sunt sint
                voluptate enim velit exercitation excepteur. Incididunt ipsum eu
                quis duis incididunt dolor id occaecat non enim do. Aliquip
                Lorem aliquip aute consequat non do ex eiusmod aliqua cupidatat
                commodo sint nisi. Ad voluptate adipisicing sunt pariatur. Ut
                labore quis excepteur est do cillum duis eiusmod cupidatat minim
                tempor nisi laboris. Occaecat exercitation quis duis mollit elit
                occaecat deserunt ullamco fugiat amet. Nisi ipsum laboris
                voluptate deserunt ad consectetur eu. Duis magna consectetur in
                occaecat ipsum adipisicing do consequat duis quis ut eiusmod
                mollit adipisicing. Pariatur magna sint fugiat laboris eiusmod
                in. Pariatur nostrud nostrud mollit id elit sint sit nulla
                laboris veniam do dolor. Sunt nulla laboris aliquip mollit nisi
                mollit cupidatat. Eu ipsum exercitation magna dolor laboris
                nulla quis duis duis nulla minim anim do reprehenderit.
                Exercitation nisi nisi eiusmod consectetur. Voluptate amet
                incididunt consectetur quis labore tempor minim. Est nisi qui
                exercitation proident mollit eiusmod. Aliquip exercitation
                eiusmod in minim esse velit tempor cillum. Ut dolore adipisicing
                officia magna elit voluptate velit. Deserunt nisi incididunt
                elit aliqua veniam ut irure Lorem nulla est adipisicing Lorem
                irure. Sunt exercitation qui tempor esse consectetur esse fugiat
                in aute tempor voluptate sint laborum. Cupidatat dolor laborum
                incididunt sit veniam ex minim sint deserunt. Mollit labore
                officia consequat laborum voluptate aliquip deserunt aute
                occaecat magna enim qui. Consectetur sit eu cillum ipsum duis in
                veniam excepteur elit nisi aute. Incididunt elit occaecat
                commodo ullamco aute quis commodo ut non commodo ea sunt anim.
                Commodo laborum ex in amet. Veniam eu est velit nostrud anim
                aute occaecat eiusmod enim deserunt commodo nulla. Enim nisi
                aute eu officia pariatur consectetur aliqua officia cillum elit
                fugiat mollit reprehenderit. Incididunt commodo nulla excepteur
                in velit voluptate exercitation adipisicing pariatur nostrud.
                Exercitation cupidatat tempor aute sunt veniam fugiat velit enim
                ad excepteur do. Reprehenderit voluptate nisi incididunt ipsum.
                Cupidatat fugiat sit exercitation sunt cupidatat ex ut
                adipisicing in eiusmod Lorem. Incididunt pariatur do dolor ea
                occaecat magna duis adipisicing laboris commodo ea labore. Amet
                reprehenderit irure magna est consectetur veniam cillum fugiat
                commodo. Minim commodo consectetur occaecat exercitation elit id
                tempor ullamco ullamco qui non exercitation exercitation.
                Occaecat veniam et nostrud id et.
            </p>
        </>
    )
}
export default EditUser
