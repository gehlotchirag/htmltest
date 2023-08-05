pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'test'
      }
    }

    stage('test') {
      steps {
        mail(subject: 'release done', body: 'release done', to: 'gehlotchirag@gmail.com')
      }
    }

  }
}