export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100 bg-light text-dark">
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="h4 mb-3">Page non trouvée</h2>
            <p className="text-center mb-4">
                Désolé, la page que vous recherchez est introuvable.
            </p>
            <a href="/" className="btn btn-primary">
                Retour à l'accueil
            </a>
        </div>
    );
}
