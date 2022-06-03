/**
 * @name EditUser
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import Avatar from '@components/Avatar/Avatar'
import Ugrid from '@components/Ugrid/Ugrid'
import React, { useState } from 'react'
import ProfilePicture from './ProfilePicture/ProfilePicture'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IEditUser {}

const EditUser: React.FC<IEditUser> = (): JSX.Element => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editProfilePicture, setEditProfilePicture] = useState(false)

    const profilePictureSettingFalse = () => {
        setEditProfilePicture(false)
    }

    const user = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Danny',
        lastName: 'Brown',
    }

    // forms data
    // const details = [
    //     {
    //         heading: {
    //             description: 'Name',
    //             label: '',
    //         },
    //         attributes: {
    //             type: 'text',
    //             name: 'name',
    //             defaultValue: 'RDS',
    //             disabled: true,
    //         },
    //     },
    //     {
    //         heading: {
    //             description: 'Preferred first Name',
    //             label: '',
    //         },
    //         attributes: {
    //             type: 'text',
    //             name: 'preferredFirstName',
    //             defaultValue: 'RDS',
    //         },
    //     },
    //     {
    //         attributes: {
    //             type: 'checkbox',
    //             name: 'usePreferredFirstName',
    //             defaultValue: ['no'],
    //         },
    //         options: [
    //             {
    //                 text: 'use preferred first name',
    //                 value: 'yes',
    //             },
    //         ],
    //     },
    //     {
    //         heading: {
    //             description: 'Preferred Last Name',
    //             label: '',
    //         },
    //         attributes: {
    //             type: 'text',
    //             name: 'preferredlastName',
    //             defaultValue: 'RDS',
    //         },
    //     },
    //     {
    //         attributes: {
    //             type: 'checkbox',
    //             name: 'usePreferredLastName',
    //             defaultValue: ['no'],
    //         },
    //         options: [
    //             {
    //                 text: 'use preferred last name',
    //                 value: 'yes',
    //             },
    //         ],
    //     },
    //     {
    //         heading: {
    //             label: 'BirthDay',
    //             description: '',
    //         },
    //         attributes: {
    //             type: 'date',
    //             name: 'date',
    //             defaultValue: '',
    //         },
    //     },
    //     {
    //         heading: {
    //             label: 'Carleton Email ',
    //             description: '',
    //         },
    //         attributes: {
    //             type: 'email',
    //             name: 'email',
    //             placeholder: 'email@email.com',
    //             defaultValue: 'firstNameLastName@carleton.ca',
    //             disabled: true,
    //         },
    //     },
    //     {
    //         heading: {
    //             label: 'Personal Email ',
    //             description: '',
    //         },
    //         attributes: {
    //             type: 'email',
    //             name: 'personlEmail',
    //             placeholder: 'email@email.com',
    //         },
    //     },
    //     {
    //         attributes: {
    //             type: 'submit',
    //             name: 'Save',
    //             value: 'save',
    //         },
    //     },
    // ]

    return (
        <>
            <div
                className='u-margin-top-s'
                onClick={() => setEditProfilePicture(!editProfilePicture)}
                onKeyDown={() => setEditProfilePicture(!editProfilePicture)}
                aria-hidden='true'
            >
                <Avatar
                    user={user}
                    rounded
                    noBorder
                    size='2xl'
                    className='u-margin-auto'
                />
            </div>
            {editProfilePicture && (
                <ProfilePicture handleClick={profilePictureSettingFalse} />
            )}

            {!editProfilePicture && (
                <Ugrid columns={1}>
                    {/* <Form
                        fields={details}
                        onSubmit={(values) => alert(JSON.stringify(values))}
                    /> */}
                    <h3> Form Content</h3>
                    <p>
                        Officia occaecat pariatur anim ipsum minim. Exercitation
                        et nisi do irure pariatur amet Lorem ipsum nisi Lorem
                        velit reprehenderit elit. Laborum ut do pariatur cillum.
                        Labore et consectetur in officia nostrud mollit ipsum
                        nostrud excepteur anim. Incididunt in ut duis tempor
                        nostrud in consequat tempor veniam. Est consectetur
                        reprehenderit eu consequat qui aliquip aliquip proident
                        excepteur consectetur deserunt. Minim commodo
                        consectetur aute id ut aliquip dolor reprehenderit
                        aliquip in ex adipisicing cillum. Do voluptate aliqua
                        cillum laboris anim quis. Esse elit cupidatat cupidatat
                        incididunt aute quis aliqua in consectetur nisi velit do
                        culpa. Magna dolore dolor dolore laboris nulla ut
                        nostrud nostrud magna elit qui. Qui officia fugiat
                        laboris aliqua ea consequat irure ipsum. Sit sunt tempor
                        anim aliqua irure labore ex. Aute anim dolore
                        adipisicing ea sit voluptate minim aute. Proident
                        adipisicing nisi ullamco est. Sit velit mollit
                        incididunt exercitation ad tempor aliquip esse sit
                        commodo. Do ex laborum quis velit consectetur magna ad
                        nisi. Eiusmod amet non nulla tempor do. Consectetur
                        fugiat commodo quis occaecat proident magna occaecat non
                        ea consequat cillum excepteur enim. Minim culpa occaecat
                        exercitation irure eiusmod. Exercitation adipisicing
                        officia mollit ullamco irure irure. Mollit pariatur duis
                        ipsum tempor. Velit cillum incididunt occaecat
                        adipisicing. Veniam dolor ullamco pariatur ex deserunt
                        ad ad laboris. Fugiat cupidatat ad pariatur occaecat
                        culpa et anim sit qui magna aliquip. Nisi tempor sunt
                        labore nulla non eu ullamco laboris elit sunt. Est do
                        cillum velit exercitation velit incididunt consectetur.
                        Officia eu qui esse non mollit Lorem in incididunt in
                        occaecat laborum nostrud labore commodo. Ipsum id eu sit
                        dolore eiusmod. Et non non anim nulla consectetur
                        consequat non cillum dolore pariatur sit enim sint
                        aliqua. Tempor deserunt sit reprehenderit magna veniam
                        consectetur mollit. Exercitation occaecat adipisicing ea
                        sit non exercitation nisi fugiat laboris laboris
                        excepteur laborum nostrud laborum. Magna ad ut dolor
                        reprehenderit eiusmod et sit nulla. Pariatur ipsum
                        exercitation est officia labore irure adipisicing est
                        sit excepteur. Commodo ad ea labore et non dolore duis
                        officia aliquip sint ullamco commodo esse. Amet est
                        aliquip reprehenderit mollit. Quis mollit ipsum
                        consequat aliquip. Eu ipsum esse officia dolore proident
                        ea sint. Pariatur adipisicing proident deserunt eiusmod.
                        Commodo commodo commodo magna amet cupidatat.
                        Adipisicing veniam id officia exercitation sit consequat
                        ullamco adipisicing sunt ea. Nisi id amet ut anim
                        cupidatat ullamco anim. Sunt culpa nisi ad ad Lorem esse
                        magna ea et quis. Quis deserunt Lorem non nisi occaecat
                        eu. Qui officia ipsum ut ut nostrud fugiat. Aliquip aute
                        eiusmod sit ullamco Lorem enim do cillum labore aliqua
                        ullamco. Labore magna voluptate non commodo ullamco elit
                        irure quis. Amet ut veniam fugiat in ea consequat
                        incididunt elit excepteur et mollit nostrud ex.
                    </p>
                </Ugrid>
            )}
        </>
    )
}

export default EditUser
