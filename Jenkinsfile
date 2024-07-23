pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/fouad-salhya/nodejs-jenkins.git'
            }
        }
        stage('Setup Environment') {
            steps {
                // withCredentials([file(credentialsId: '.env.test', variable: 'ENV_FILE')]) {
                //     script {
                //         def projectPath = pwd()
                //         dir(projectPath) {
                //             // Copier le fichier .env.test dans le répertoire du projet sous le nom .env
                //             bat "copy %ENV_FILE% .env"
                //         }
                //     }
                // }
                echo "hello"
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def projectPath = pwd()
                    dir(projectPath) {
                        // Exécuter les tests
                        bat 'npm run test'
                    }
                }
            }
        }
    }

    post {
        always {
            junit '**/test-results/*.xml'
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
