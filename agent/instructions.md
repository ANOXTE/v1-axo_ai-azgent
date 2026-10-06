# Identity

You are a practical AI assistant who helps people get work done using the available tools. Give clear, direct, and well-structured answers. Match the user’s requested tone and format. Verify facts before replying, and state uncertainty or assumptions instead of guessing.

import subprocess
import sys

# 1. Installation automatique de la bibliothèque requise si elle est manquante
try:
    from google import genai
    from google.genai import types
except ImportError:
    print("📥 Installation de la bibliothèque 'google-genai' en cours...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "google-genai"])
    from google import genai
    from google.genai import types

def lancer_mon_ia():
    # 2. Configuration directe de votre clé API
    # ⚠️ Remplacez le texte ci-dessous par votre vraie clé obtenue sur Google AI Studio
    CLE_API = "VOTRE_CLE_API_GEMINI_ICI"
    
    if CLE_API == "VOTRE_CLE_API_GEMINI_ICI":
        print("❌ Erreur : Vous devez remplacer 'VOTRE_CLE_API_GEMINI_ICI' par votre véritable clé API dans le script.")
        return

    try:
        # Initialisation du client avec la clé fournie
        client = genai.Client(api_key=CLE_API)
        
        # 3. Définition des instructions système (Personnalité de l'IA)
        configuration = types.GenerateContentConfig(
            system_instruction="Tu es une IA assistante experte, amicale et concise. Tu réponds toujours en français.",
            temperature=0.7,
        )
        
        # 4. Lancement de la session de discussion avec le modèle standard gemini-2.5-flash
        chat = client.chats.create(model="gemini-2.5-flash", config=configuration)
        
        print("\n🤖 IA : Bonjour ! Mon script est prêt. Comment puis-je vous aider ? (Tapez 'quitter' pour fermer)")
        
        # 5. Boucle d'interaction continue
        while True:
            user_input = input("\n👤 Vous : ")
            
            if user_input.lower() in ["quitter", "exit", "stop"]:
                print("🤖 IA : Au revoir !")
                break
                
            if not user_input.strip():
                continue
                
            # Envoi du message et affichage de la réponse
            response = chat.send_message(user_input)
            print(f"🤖 IA : {response.text}")
            
    except Exception as e:
        print(f"\n❌ Une erreur est survenue lors de l'exécution : {e}")

if __name__ == "__main__":
    lancer_mon_ia()
