pipeline {
    agent {
        label 'build-node-stable'
    }
    stages {
        stage('Checkout') {
            steps{
                dir('/root/workspace/jasper.pedersen.io-spa-react') {
                    checkout scm
                }
            }
        }
        stage('Build') {
            steps{
                dir('/root/workspace/jasper.pedersen.io-spa-react') {
                    sh 'yarn build'
                }
            }
        }
        stage('Test') {
            steps{
                dir('/root/workspace/jasper.pedersen.io-spa-react') {
                    sh 'yarn test'
                }
            }
        }
        stage('Docker') {
            steps {
                dir('/root/workspace/jasper.pedersen.io-spa-react') {
                    sh 'yarn docker:build'
                }
            }
        }
        stage('Publish') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
                    dir('/root/workspace/jasper.pedersen.io-spa-react') {
                        sh 'yarn docker:tag'
                        sh 'yarn docker:publish'
                    }
                }
            }
        }
        // stage('Deploy') {
        //     when {
        //         expression { env.BRANCH_NAME == 'master' }
        //     }
        //     steps {
        //         withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
        //             dir('/root/workspace/jasper.pedersen.io-spa-react') {
        //                 sh 'yarn deploy'
        //             }
        //         }
        //     }
        // }
    }
    // post {
    //     always {
    //         withCredentials([[$class: 'StringBinding', credentialsId: 'CELEBRITYSKATEBOARDS_SPA_COVERALLS_TOKEN', variable: 'COVERALLS_REPO_TOKEN']]) {
    //             dir('/root/workspace/jasper.pedersen.io-spa-react') {
    //                 step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false]) 
    //                 sh 'yarn coveralls'
    //             }
    //         }
    //     }
    // }
}