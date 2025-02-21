export default function TiquetsPendents(pendientes){

    console.log('TiquetsPendents cargados');
    return (
        <div>
            <h2>Tickets pendientes</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Título</th>
                        <th>Prioridad</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aquí se cargan los tickets */}
                </tbody>
            </table>
        </div>
    )
}