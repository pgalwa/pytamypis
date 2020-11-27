import React, {useEffect, useState} from "react"
const Pdf = () => {
    const [form, setForm] = useState(null);

    useEffect(() => {
        const form = window.localStorage.getItem('form');
        setForm(JSON.parse(form));
    }, [])

    useEffect(() => {
        if(form) {window.print();
        }
    }, [form])

    return form ? (
            <p>
            WNIOSEK O UDOSTĘPNIENIE INFORMACJI PUBLICZNEJ
            {form.name}
            {form.surname}
            {JSON.stringify(form)}

      
      Na podstawie art. 2 ust. 1 i art. 10 ust. 1 ustawy z dnia 6 września 2001 r. o dostępie do informacji publicznej (j. t. Dz. U. z 2016 r. poz. 1764 ze zm.) proszę o udostępnienie informacji w następującym zakresie:
            </p>
      ) : null
}

export default Pdf
